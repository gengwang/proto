# Proto

The seed project is based on Yeoman [web app generator](https://github.com/yeoman/generator-webapp#readme), with the following modifications:
- Support ES6 style `import/export`.
- Export to a bundle js file so that the app works in today's browser.
- Add [d3](https://d3js.org/) and [underscoreJS](http://underscorejs.org/) as dependencies.

## Getting started
1. `npm install`
2. `bower install`

## Development
- `gulp` to build
- `gulp serve` to lunch a web server and watch
- `gulp serve:dist` to serve for production
- `gulp test` to run tests