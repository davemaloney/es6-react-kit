import React from 'react';
import { Link } from 'react-router';

import CourseList from './courseList';
import CourseStore from '../../stores/courseStore';

const CoursePage = React.createClass({
  getInitialState() {
    return {
      courses: CourseStore.getAllCourses(),
    };
  },

  componentWillMount() {
    CourseStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    CourseStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({ courses: CourseStore.getAllCourses() });
  },

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="course" className="btn btn-default">Add Course</Link>
        <CourseList courses={this.state.courses} />
      </div>
    );
  },
});

module.exports = CoursePage;
