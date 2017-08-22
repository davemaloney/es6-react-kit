import Dispatch from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import AuthorApi from '../api/authorApi';

const InitializeActions = {
  initApp() {
    Dispatch.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors(),
      },
    });
  },
};

module.exports = InitializeActions;
