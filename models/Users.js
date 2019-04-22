'use strict';
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  username:  String,
  password: String,
  overall: Boolean
});

module.exports = mongoose.model('User', userSchema);
