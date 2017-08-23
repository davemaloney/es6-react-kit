import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import toastr from 'toastr';

import AuthorActions from '../../actions/authorActions';

class AuthorList extends React.Component {
  constructor() {
    super();
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }

  deleteAuthor(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  }

  render() {
    const createAuthorRow = (author, i) => (
      <tr key={i}>
        <td>{author.firstName} {author.lastName}</td>
        <td><Link to={`author/${author.id}`}>Edit</Link></td>
        <td><a role="button" tabIndex={0} onClick={event => this.deleteAuthor(author.id, event)}>Delete</a></td>
      </tr>
    );

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th />
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
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  })).isRequired,
};

module.exports = AuthorList;
