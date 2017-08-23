import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const wrapperClass = (this.props.error && this.props.error.length > 0) ? 'form-group has-error' : 'form-group';

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <div className="field">
          <input
            type="text"
            className="form-control"
            name={this.props.name}
            ref={this.props.name}
            placeholder={this.props.placeholder ? this.props.placeholder : this.props.label}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: '',
  value: '',
  error: '',
};

module.exports = TextInput;
