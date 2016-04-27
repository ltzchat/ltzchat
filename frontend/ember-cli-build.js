/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // material design
  app.import('bower_components/material-design-lite/material.js');
  app.import('bower_components/material-design-lite/material.css');

  return app.toTree();
};
