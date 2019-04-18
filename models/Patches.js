'use strict';
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var patchSchema = new Schema({
  name:  String,
  description: String,
  image: String,
  userID: String
});

module.exports = mongoose.model('Patch', patchSchema);
