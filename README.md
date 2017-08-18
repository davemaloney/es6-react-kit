# React with Flux Starter App

**NOTE:** This app was built with ["Building Applications with React and Flux" on Pluralsight](http://www.pluralsight.com/author/cory-house). For the final demo built in that course, [go here](https://github.com/coryhouse/react-flux-building-applications) or see the [updated demo](https://github.com/coryhouse/react-flux-building-applications/tree/update) with the versions as of early 2017.

## This starter kit uses the following
- React 0.13.3, React Router 0.13.3, and Flux 2.0.3 for ultra-responsive UI development  
- Browserify for bundling  
- Bootstrap for styling  
- Gulp build that  
  - compiles JSX  
  - lints JSX and JS via ESLint  
  - bundles JS and CSS files  
  - migrates the built app to the dist folder  
  - runs a dev webserver  
  - opens your browser at the dev URL  
  - reloads the browser upon save  

## Start
Prereq: [NodeJS](http://www.nodejs.org)  

1. `git clone https://github.com/davemaloney/react-flux-starter-kit` 
1. `npm install` - Installs packages
1. `npm start` - Builds the project and opens your browser
6. Navigate to <http://localhost:9005/> if the browser doesn't open automatically.

## Change Log
* Aug 20, 2015 - Updated to use gulp-open 1.0.0 and browserify 11.0.1 since the course has been updated to use these versions.  
* Jan 23, 2016 - Fixed missing quotes around jQuery globals in .eslintrc.
* Jan 12, 2017 - Added link to completed demo and updated demo that uses latest versions as of early 2017.
