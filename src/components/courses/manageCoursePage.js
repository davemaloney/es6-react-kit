import React from 'react';
import { withRouter, browserHistory } from 'react-router';
import toastr from 'toastr';

import CourseForm from './courseForm';
import CourseActions from '../../actions/courseActions';
import CourseStore from '../../stores/courseStore';

const ManageCoursePage = React.createClass({

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  },

  routerWillLeave() {
    // Return false to prevent a transition w/o prompting the user,
    // or return a string to allow the user to decide:
    if (this.state.dirty) {
      return 'Leave without saving?';
    }
    return true;
  },

  getInitialState() {
    return {
      course: {
        id: '',
        title: '',
        watchHref: '',
        author: {
          id: '',
          name: '',
        },
        time: '',
        category: '',
      },
      errors: {},
      dirty: false,
    };
  },

  componentWillMount() {
    const courseId = this.props.params.id; // comes from the path '/course/:id

    if (courseId) {
      this.setState({ course: CourseStore.getCourseById(courseId) });
    }
  },

  setCourseState(event) {
    this.setState({ dirty: true });
    const field = event.target.name;
    const value = event.target.value;
    this.state.course[field] = value;
    return this.setState({ course: this.state.course });
  },

  setCourseAuthor(event) {
    this.setState({ dirty: true });
    this.state.course.author.id = event.target.value;
    this.state.course.author.name = event.target.options[event.target.selectedIndex].text;
    return this.setState({ course: this.state.course });
  },

  courseFormIsValid() {
    let formIsValid = true;
    this.state.errors = {}; // clear previous errors

    if (this.state.course.title.length < 10) {
      this.state.errors.title = 'Title must be at least 10 characters.';
      formIsValid = false;
    }

    if (this.state.course.watchHref.length < 15) {
      this.state.errors.watchHref = 'Please input the URL to the course.';
      formIsValid = false;
    }

    if (this.state.course.time.length < 4) {
      this.state.errors.time = 'Please input the length of the course in the form H:MM.';
      formIsValid = false;
    }

    if (this.state.course.category.length < 4) {
      this.state.errors.category = 'Please input the category of the course.';
      formIsValid = false;
    }

    this.setState({ errors: this.state.errors });
    return formIsValid;
  },

  saveCourse(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }

    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
    }
    CourseActions.createCourse(this.state.course);
    this.setState({ dirty: false }, () => {
      toastr.success(`Course <strong>${this.state.course.title}</strong> saved.`);
      browserHistory.push('/courses');
    });
  },

  render() {
    return (
      <CourseForm
        course={this.state.course}
        onChange={this.setCourseState}
        onAuthorChange={this.setCourseAuthor}
        onSave={this.saveCourse}
        errors={this.state.errors}
      />
    );
  },
});

module.exports = withRouter(ManageCoursePage);
