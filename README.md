# Proto

The seed project is based on Yeoman [web app generator](https://github.com/yeoman/generator-webapp#readme), with the following modifications:
- Support ES6 style `import/export`
- Export to ES5 so that the app runs in today's browsers
- Add [d3](https://d3jsorg/) and [underscoreJS](http://underscorejsorg/) as dependencies

## Getting started
- `npm i && bower i`
- To use npm packages, for example:  
First run `npm i --save underscore` then use it anywhere in your ES6 code: `import * as _ from 'underscore';`

## Development
- `gulp` to build
- `gulp clean` to clean the production folder
- `gulp serve` to lunch a web server and watch
- `gulp && gulp serve:dist` to serve for production
- `gulp test` to run tests