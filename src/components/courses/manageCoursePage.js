import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, browserHistory } from 'react-router';
import toastr from 'toastr';

import CourseForm from './courseForm';
import CourseActions from '../../actions/courseActions';
import CourseStore from '../../stores/courseStore';

class ManageCoursePage extends React.Component {
  constructor() {
    super();

    this.state = {
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
    this.saveCourse = this.saveCourse.bind(this);
    this.setCourseState = this.setCourseState.bind(this);
    this.setCourseAuthor = this.setCourseAuthor.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentWillMount() {
    const courseId = this.props.params.id; // comes from the path '/course/:id

    if (courseId) {
      this.setState({ course: CourseStore.getCourseById(courseId) });
    }
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  setCourseState(event) {
    this.setState({ dirty: true });
    const field = event.target.name;
    const value = event.target.value;
    this.state.course[field] = value;
    return this.setState({ course: this.state.course });
  }

  setCourseAuthor(event) {
    this.setState({ dirty: true });
    this.state.course.author.id = event.target.value;
    this.state.course.author.name = event.target.options[event.target.selectedIndex].text;
    return this.setState({ course: this.state.course });
  }

  routerWillLeave() {
    // Return false to prevent a transition w/o prompting the user,
    // or return a string to allow the user to decide:
    if (this.state.dirty) {
      return 'Leave without saving?';
    }
    return true;
  }

  courseFormIsValid() {
    let formIsValid = true;
    this.state.errors = {}; // clear previous errors

    if (this.state.course.title.length < 10) {
      this.state.errors.title = 'Title must be at least 10 characters.';
      formIsValid = false;
    }

    if (this.state.course.author.id.length < 1) {
      this.state.errors.author = 'Please choose the author of this course.';
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
  }

  saveCourse(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }

    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
      toastr.success(`Course <strong>${this.state.course.title}</strong> updated.`);
    } else {
      CourseActions.createCourse(this.state.course);
      toastr.success(`Course <strong>${this.state.course.title}</strong> saved.`);
    }
    this.setState({ dirty: false }, () => {
      browserHistory.push('/courses');
    });
  }

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
  }
}

ManageCoursePage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
  route: PropTypes.shape().isRequired,
  router: PropTypes.shape({
    setRouteLeaveHook: PropTypes.func.isRequired,
  }).isRequired,
};

ManageCoursePage.defaultProps = {
  params: {
    id: '',
  },
};

module.exports = withRouter(ManageCoursePage);
