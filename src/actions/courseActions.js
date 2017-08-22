import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import CourseApi from '../api/courseApi';

const CourseActions = {
  createCourse(course) {
    const newCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse,
    });
  },

  updateCourse(course) {
    const updatedCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: updatedCourse,
    });
  },

  deleteCourse(id) {
    CourseApi.deleteCourse(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id,
    });
  },
};

module.exports = CourseActions;
