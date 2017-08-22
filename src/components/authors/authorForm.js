import React from 'react';

import TextInput from '../common/textInput';

const AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
  },

  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <TextInput
          name="firstName"
          label="First Name"
          onChange={this.props.onChange}
          value={this.props.author.firstName}
          error={this.props.errors.firstName}
        />

        <TextInput
          name="lastName"
          label="Last Name"
          onChange={this.props.onChange}
          value={this.props.author.lastName}
          error={this.props.errors.lastName}
        />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  },
});

module.exports = AuthorForm;
