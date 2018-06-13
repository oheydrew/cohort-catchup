const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classmateSchema = new Schema({
  firstName: { type: 'String', required: true },
  lastName: { type: 'String', required: true },
  company: { type: 'String', required: true },
  address: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

const classmateModel = mongoose.model('Classmate', classmateSchema);

module.exports = classmateModel;