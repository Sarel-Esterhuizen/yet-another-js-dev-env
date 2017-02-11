// File no transpiled so must use CommonJS and ES5.

// Register babel to transpile tests before tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['css'] = function() {};
