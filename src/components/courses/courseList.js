import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import toastr from 'toastr';

import CourseActions from '../../actions/courseActions';

class CourseList extends React.Component {
  constructor() {
    super();
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(id, event) {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course Deleted');
  }

  render() {
    const createCourseRow = (course, i) => (
      <tr key={i}>
        <td><a href={course.watchHref}>{course.title}</a></td>
        <td>{course.time}</td>
        <td>{course.category}</td>
        <td>{course.author.name}</td>
        <td><Link to={`course/${course.id}`}>Edit</Link></td>
        <td><a role="button" tabIndex={0} onClick={event => this.deleteCourse(course.id, event)}>Delete</a></td>
      </tr>
    );

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>length</th>
            <th>Category</th>
            <th>Author</th>
            <th>Edit</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.courses.map(createCourseRow, this)}
        </tbody>
      </table>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    watchHref: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    time: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

module.exports = CourseList;
