import React from 'react';
import { DefaultRoute, Route, Redirect, NotFoundRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/homePage';
import AuthorPage from './components/authors/authorPage';
import ManageAuthorPage from './components/authors/manageAuthorPage';
import AboutPage from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name="authors" handler={AuthorPage} />
    <Route name="addAuthor" path="author" handler={ManageAuthorPage} />
    <Route name="manageAuthor" path="author/:id" handler={ManageAuthorPage} />
    <Route name="about" handler={AboutPage} />
    <Redirect from="about-us" to="about" />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);

module.exports = routes;
