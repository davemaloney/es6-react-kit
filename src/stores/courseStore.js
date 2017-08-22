import { EventEmitter } from 'events';
import objectAssign from 'object-assign';
import _ from 'lodash';

import Dispatch from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

const CHANGE_EVENT = 'change';
let _courses = [];

const CourseStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getAllCourses() {
    return _courses;
  },

  getCourseById(id) {
    return _.find(_courses, { id });
  },
});

Dispatch.register((action) => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _courses = action.initialData.courses;
      CourseStore.emitChange(); break;
    case ActionTypes.CREATE_COURSE:
      _courses.push(action.course);
      CourseStore.emitChange();
      break;
    case ActionTypes.UPDATE_COURSE: {
      const existingCourse = _.find(_courses, { id: action.course.id });
      const existingCourseIndex = _.indexOf(_courses, existingCourse);
      _courses.splice(existingCourseIndex, 1, action.course);
      CourseStore.emitChange();
      break; }
    case ActionTypes.DELETE_COURSE:
      _.remove(_courses, course => action.id === course.id);
      CourseStore.emitChange();
      break;
    default:
      // nothing to do
  }
});

module.exports = CourseStore;
