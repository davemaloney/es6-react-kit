import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
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
            <option value="" disabled>Select {this.props.label}</option> {/* Need to have this here for placeholder */}
            {this.props.children}
          </select>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  value: '',
  children: null,
  error: '',
};

module.exports = SelectInput;
