import React from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

import AuthorActions from '../../actions/authorActions';

const AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired,
  },

  deleteAuthor: (id, event) => {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  },

  render() {
    const createAuthorRow = author => (
      <tr key={author.id}>
        <td><a role="button" tabIndex={0} onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
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
  },
});


module.exports = AuthorList;
