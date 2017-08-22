// This file is mocking a web API by hitting hard coded data.
import _ from 'lodash';

import { authors } from './authorData';

// This would be performed on the server in a real app. Just stubbing in.
const _generateId = author => `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;

const _clone = item => JSON.parse(JSON.stringify(item)); // return cloned copy so that the item is passed by value instead of by reference

const AuthorApi = {
  getAllAuthors() {
    return _clone(authors);
  },

  getAuthorById(id) {
    const author = _.find(authors, { id });
    return _clone(author);
  },

  saveAuthor(author) {
    // pretend an ajax call to web api is made here
    console.log('Pretend this just saved the author to the DB via AJAX call...'); // eslint-disable-line no-console

    if (author.id) {
      const existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
      authors.splice(existingAuthorIndex, 1, author);
    } else {
      // Just simulating creation here.
      // The server would generate ids for new authors in a real app.
      // Cloning so copy returned is passed by value rather than by reference.
      author.id = _generateId(author);
      authors.push(author);
    }
    return _clone(author);
  },

  deleteAuthor(id) {
    console.log('Pretend this just deleted the author from the DB via an AJAX call...');// eslint-disable-line no-console
    _.remove(authors, { id });
  },
};

module.exports = AuthorApi;
