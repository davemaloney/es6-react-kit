import React from 'react';

const TextInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string,
  },

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
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  },
});

module.exports = TextInput;
