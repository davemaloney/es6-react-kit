import React from 'react';
import { Link } from 'react-router';

import AuthorList from './authorList';
import AuthorStore from '../../stores/authorStore';

const AuthorPage = React.createClass({
  getInitialState() {
    return {
      authors: AuthorStore.getAllAuthors(),
    };
  },

  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  },
});

module.exports = AuthorPage;
