import React from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

import CourseActions from '../../actions/courseActions';

class CourseList extends React.Component {
  deleteCourse(id, event) {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course Deleted');
  }

  constructor() {
    super();
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  render() {
    const createCourseRow = course => (
      <tr key={course.id}>
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
  courses: React.PropTypes.array.isRequired,
};

module.exports = CourseList;
