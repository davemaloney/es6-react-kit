import React from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

import AuthorActions from '../../actions/authorActions';

class AuthorList extends React.Component {
  deleteAuthor(id, event) {
    console.log(event);
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  }

  constructor() {
    super();
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }

  render() {
    const createAuthorRow = author => (
      <tr key={author.id}>
        <td><a role="button" tabIndex={0} onClick={event => this.deleteAuthor(author.id, event)}>Delete</a></td>
        <td><Link to={`author/${author.id}`}>{author.id}</Link></td>
        <td>{author.firstName} {author.lastName}</td>
      </tr>
    );

    return (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    );
  }
}

AuthorList.propTypes = {
  authors: React.PropTypes.array.isRequired,
};

module.exports = AuthorList;
