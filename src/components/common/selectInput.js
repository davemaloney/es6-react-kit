import React from 'react';

const SelectInput = React.createClass({
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
          <select
            className="form-control"
            name={this.props.name}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          >
            {this.props.children}
          </select>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  },
});

module.exports = SelectInput;
