import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render: () => (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img alt="Logo" style={{ height: '100%' }} src="../images/pluralsight-logo.png" />
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="authors">Authors</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    </nav>
  ),
});

module.exports = Header;
