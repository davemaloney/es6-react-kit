/* eslint-disable strict */

import React from 'react';
import { RouteHandler } from 'react-router';
// import $ from 'jquery';

import Header from './common/header';

const App = React.createClass({
  render: () => (
    <div>
      <Header />
      <div className="container-fluid">
        <RouteHandler />
      </div>
    </div>
  ),
});

module.exports = App;
