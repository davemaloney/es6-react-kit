import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../common/textInput';

const AuthorForm = props => (
  <form>
    <h1>Manage Author</h1>
    <TextInput
      name="firstName"
      label="First Name"
      onChange={props.onChange}
      value={props.author.firstName}
      error={props.errors.firstName}
    />

    <TextInput
      name="lastName"
      label="Last Name"
      onChange={props.onChange}
      value={props.author.lastName}
      error={props.errors.lastName}
    />

    <input type="submit" value="Save" className="btn btn-default" onClick={props.onSave} />
  </form>
);

AuthorForm.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

AuthorForm.defaultProps = {
  errors: PropTypes.shape({
    firstName: '',
    lastName: '',
  }),
};

module.exports = AuthorForm;
