// Configure the web server that will serve up the files in our src directory.
import express from 'express';
import path from 'path';
import open from 'open';

var port = 3001;
var app = express();

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
