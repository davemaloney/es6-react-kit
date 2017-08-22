import React from 'react';

import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';

import AuthorStore from '../../stores/authorStore';

const CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
  },

  render() {
    const authorList = () => {
      return {
        authors: AuthorStore.getAllAuthors(),
      };
    };

    const createAuthorRow = author => (
      <option
        key={author.id}
        value={author.id}
      >
        {author.firstName} {author.lastName}
      </option>
    );

    return (
      <form>
        <h1>Manage Course</h1>
        <TextInput
          name="title"
          label="Title"
          onChange={this.props.onChange}
          value={this.props.course.title}
          error={this.props.errors.title}
        />

        <TextInput
          name="watchHref"
          label="URL"
          onChange={this.props.onChange}
          value={this.props.course.watchHref}
          error={this.props.errors.watchHref}
        />

        <SelectInput
          name="author"
          label="Author"
          onChange={this.props.onAuthorChange}
          value={this.props.course.author.id}
          error={this.props.errors.author}
        >
          {authorList().authors.map(createAuthorRow, this)}
        </SelectInput>

        <TextInput
          name="length"
          label="Length (H:MM)"
          onChange={this.props.onChange}
          value={this.props.course.length}
          error={this.props.errors.length}
        />

        <TextInput
          name="category"
          label="Category"
          onChange={this.props.onChange}
          value={this.props.course.category}
          error={this.props.errors.category}
        />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  },
});

module.exports = CourseForm;
