import React from 'react';
import { Link } from 'react-router';

import AuthorList from './authorList';
import AuthorStore from '../../stores/authorStore';

class AuthorPage extends React.Component {
  constructor() {
    super();

    this.state = {
      authors: AuthorStore.getAllAuthors(),
    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="author" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
}

module.exports = AuthorPage;
