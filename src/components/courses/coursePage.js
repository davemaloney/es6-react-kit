import React from 'react';
import { Link } from 'react-router';

import CourseList from './courseList';
import CourseStore from '../../stores/courseStore';

class CoursePage extends React.Component {
  constructor() {
    super();

    this.state = {
      courses: CourseStore.getAllCourses(),
    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    CourseStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CourseStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ courses: CourseStore.getAllCourses() });
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="course" className="btn btn-default">Add Course</Link>
        <CourseList courses={this.state.courses} />
      </div>
    );
  }
}

module.exports = CoursePage;
