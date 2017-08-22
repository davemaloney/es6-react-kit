import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = React.createClass({
  render: () => (
    <div>
      <h1>Page Not Found</h1>
      <p>Something went wrong. That link is not valid.</p>
      <Link to="app" className="btn btn-primary btn-lg">Back to Home</Link>
    </div>
  ),
});

module.exports = NotFoundPage;
