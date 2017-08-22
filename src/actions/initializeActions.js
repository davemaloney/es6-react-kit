import Dispatch from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import AuthorApi from '../api/authorApi';
import CourseApi from '../api/courseApi';

const InitializeActions = {
  initApp() {
    Dispatch.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors(),
        courses: CourseApi.getAllCourses(),
      },
    });
  },
};

module.exports = InitializeActions;
