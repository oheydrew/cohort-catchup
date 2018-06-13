const Express = require('express');
const mongoose = require('./db/connection');
const bodyParser = require('body-parser');
const config = require('./config');

// create an express app into "app"
const app = new Express();

// import the classmate routes
const classmatesRouter = require('./routes/classmateRouter');

// 'use' tells the 'express app' to 'use' middleware
// in this case we are telling it to use 'bodyParser.json()' as middleware
// which parses the body of a response into something we can use
app.use(bodyParser.json());

app.use('/', classmatesRouter);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// run server
app.listen( config.serverPort, () => {
    console.log( `Express server listening on port ${config.serverPort} 😀 ` );
})
.on( 'error', ( error ) => {
  console.log( `*** Server Error! Details below: ***` );
  console.log( error );
});



// module.exports = mongoose;