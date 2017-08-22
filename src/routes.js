import React from 'react';
import { Router, browserHistory, IndexRoute, Route, Redirect } from 'react-router';

import App from './components/app';
import HomePage from './components/homePage';
import AuthorPage from './components/authors/authorPage';
import ManageAuthorPage from './components/authors/manageAuthorPage';
import AboutPage from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="authors" component={AuthorPage} />
      <Route path="author" component={ManageAuthorPage} />
      <Route path="author/:id" component={ManageAuthorPage} />
      <Route path="about" component={AboutPage} />
      <Redirect from="about-us" to="about" />
      <Redirect from="awthurs" to="authors" />
      <Redirect from="about/*" to="about" />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);

module.exports = routes;
