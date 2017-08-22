import { EventEmitter } from 'events';
import objectAssign from 'object-assign';
import _ from 'lodash';

import Dispatch from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

const CHANGE_EVENT = 'change';
let _authors = [];

const AuthorStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors() {
    return _authors;
  },

  getAuthorById(id) {
    return _.find(_authors, { id });
  },
});

Dispatch.register((action) => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange(); break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR: {
      const existingAuthor = _.find(_authors, { id: action.author.id });
      const existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break; }
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, author => action.id === author.id);
      AuthorStore.emitChange();
      break;
    default:
      // nothing to do
  }
});

module.exports = AuthorStore;
