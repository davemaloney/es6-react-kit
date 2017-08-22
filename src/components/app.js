/* eslint-disable strict */

import React from 'react';
// import $ from 'jquery';

import Header from './common/header';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  },
});

module.exports = App;
