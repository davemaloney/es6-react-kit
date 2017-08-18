'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Something went wrong. That link is not valid.</p>
        <Link to='app' className='btn btn-primary btn-lg'>Back to Home</Link>
      </div>
    );
  }
});

module.exports = NotFoundPage;
