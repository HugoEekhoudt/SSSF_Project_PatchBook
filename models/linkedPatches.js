'use strict';
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var linkedPatchSchema = new Schema({
  patchID: String,
  userID: String
});

module.exports = mongoose.model('LinkedPatch', linkedPatchSchema);
