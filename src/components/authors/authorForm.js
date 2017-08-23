import React from 'react';

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
  author: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
};

module.exports = AuthorForm;
