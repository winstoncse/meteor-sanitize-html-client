Package.describe({
  name: 'djedi:sanitize-html-client',
  version: '1.9.0',
  // Brief, one-line summary of the package.
  summary: "Wrapper for punkave's Sanitize HTML node package",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/djedi23/meteor-sanitize-html-client.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({'sanitize-html':'1.9.0'});

Package.onUse(function(api) {
  api.use('cosmos:browserify', 'client');
  api.addFiles('sanitize-html.browserify.js', 'client');
  api.addFiles('sanitize-html-server.js', 'server');

  api.export('sanitizeHtml');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('djedi:sanitize-html-client');
  api.addFiles('sanitize-html-client-tests.js');
});
