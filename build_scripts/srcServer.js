// Configure the web server that will serve up the files in our src directory.
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// Disable the console rule since this is a build script file.
/* eslint-disable no-console */

// Define our constants.
const port = 3001;
const app = express();
const compiler = webpack(config);

// Tell express to use WebPack Middleware.
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, // Don't display special info.
  publicPath: config.output.publicPath // Variable we defined in output in config.
}));

// Create and instance of Express Server
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

// Tell express to listen to the port configured above.
app.listen(port, function (error) {
  if (error)
  {
    console.log(error);
  }
  else
  {
    open('http://localhost:' + port);
  }
});
