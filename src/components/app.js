/* eslint-disable strict */

import React from 'react';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import Header from './common/header';

const App = props => (
  <div>
    <Header />
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

App.defaultProps = {
  children: null,
};


module.exports = App;
