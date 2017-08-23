/* eslint-disable strict */

import React from 'react';
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

module.exports = App;
