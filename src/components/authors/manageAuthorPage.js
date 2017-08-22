import React from 'react';
import Router from 'react-router';
import toastr from 'toastr';

import AuthorForm from './authorForm';
import AuthorActions from '../../actions/authorActions';
import AuthorStore from '../../stores/authorStore';

const ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation,
  ],

  statics: {
    willTransitionFrom(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    },
  },

  getInitialState() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: '',
      },
      errors: {},
      dirty: false,
    };
  },

  componentWillMount() {
    const authorId = this.props.params.id; // comes from the path '/author/:id

    if (authorId) {
      this.setState({ author: AuthorStore.getAuthorById(authorId) });
    }
  },

  setAuthorState(event) {
    this.setState({ dirty: true });
    const field = event.target.name;
    const value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  authorFormIsValid() {
    let formIsValid = true;
    this.state.errors = {}; // clear previous errors

    if (this.state.author.firstName.length < 2) {
      this.state.errors.firstName = 'First name must be at least 2 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 2) {
      this.state.errors.lastName = 'Last name must be at least 2 characters.';
      formIsValid = false;
    }

    this.setState({ errors: this.state.errors });
    return formIsValid;
  },

  saveAuthor(event) {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }

    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    }
    AuthorActions.createAuthor(this.state.author);
    this.setState({ dirty: false });
    toastr.success(`Author <strong>${this.state.author.firstName} ${this.state.author.lastName}</strong> saved.`);
    this.transitionTo('authors');
  },

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors}
      />
    );
  },
});

module.exports = ManageAuthorPage;
