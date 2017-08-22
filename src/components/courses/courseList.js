import React from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

import CourseActions from '../../actions/courseActions';

const CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired,
  },

  deleteCourse: (id, event) => {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course Deleted');
  },

  render() {
    const createCourseRow = course => (
      <tr key={course.id}>
        <td><a href={course.watchHref}>{course.title}</a></td>
        <td>{course.length}</td>
        <td>{course.category}</td>
        <td>{course.author.name}</td>
        <td><Link to={`course/${course.id}`}>Edit</Link></td>
        <td><a role="button" tabIndex={0} onClick={this.deleteCourse.bind(this,course.id)}>Delete</a></td>
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
  },
});

module.exports = CourseList;
