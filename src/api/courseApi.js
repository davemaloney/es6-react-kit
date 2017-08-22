// This file is mocking a web API by hitting hard coded data.
import _ from 'lodash';

import { courses } from './courseData';

// This would be performed on the server in a real app. Just stubbing in.
const _generateId = course => course.title.replace(' ', '-');

const _clone = item => JSON.parse(JSON.stringify(item)); // return cloned copy so that the item is passed by value instead of by reference

const CourseApi = {
  getAllCourses() {
    return _clone(courses);
  },

  getCoursesById(id) {
    const course = _.find(courses, { id });
    return _clone(course);
  },

  saveCourse(course) {
    // pretend an ajax call to web api is made here
    console.log('Imagine saving course via AJAX call...'); // eslint-disable-line no-console

    if (!course.id) {
      // just simulating creation here. This data 
      // would be generated on the server in a real app. 
      // The server would generate ids for new authors in a real app.
      course.id = _generateId(course);
      courses.push(_clone(course));
    } else {
      const existingCourseIndex = _.indexOf(courses, _.find(courses, { id: course.id }));
      courses.splice(existingCourseIndex, 1, course);
    }
    return course;
  },

  deleteCourse(id) {
    console.log(`Imagine deleting course with id of ${id} via AJAX call...`); // eslint-disable-line no-console
    _.remove(courses, { id });
  },
};

module.exports = CourseApi;
