const mongoose = require('mongoose');
const config = require('../config');

console.log(`Server: ${config.mongoUrl}`);

mongoose.connect(config.mongoUrl)
.then( () => {
  console.log('Mongo Connection established.');
})
.catch( error => {
  console.error('*** Connection Error! Details below: ***');
  console.log(`Error Details: ${error}`);
  process.exit();
});

module.exports = mongoose;