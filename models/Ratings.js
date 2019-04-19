'use strict';
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ratingSchema = new Schema({
  ratingValue: String,
  patchID: String,
  userID: String,
});

module.exports = mongoose.model('Rating', ratingSchema);
