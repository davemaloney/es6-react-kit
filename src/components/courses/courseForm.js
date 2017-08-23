import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';

import AuthorStore from '../../stores/authorStore';

const CourseForm = (props) => {
  const authorList = () => ({
    authors: AuthorStore.getAllAuthors(),
  });

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
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <TextInput
        name="watchHref"
        label="URL"
        placeholder="https://www..."
        onChange={props.onChange}
        value={props.course.watchHref}
        error={props.errors.watchHref}
      />

      <SelectInput
        name="author"
        label="Author"
        onChange={props.onAuthorChange}
        value={props.course.author.id}
        error={props.errors.author}
      >
        {authorList().authors.map(createAuthorRow, this)}
      </SelectInput>

      <TextInput
        name="time"
        label="Length (H:MM)"
        onChange={props.onChange}
        value={props.course.time}
        error={props.errors.time}
      />

      <TextInput
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-default" onClick={props.onSave} />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    watchHref: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    time: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    watchHref: PropTypes.string,
    author: PropTypes.string,
    time: PropTypes.string,
    category: PropTypes.string,
  }),
};

CourseForm.defaultProps = {
  errors: PropTypes.shape({
    id: '',
    title: '',
    watchHref: '',
    author: '',
    time: '',
    category: '',
  }),
};

module.exports = CourseForm;
