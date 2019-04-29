'use strict';
const User = require('../models/Users');
const Patch = require('../models/patches');
const Rating = require('../models/ratings');
const LinkedPatch = require('../models/linkedpatches');

exports.linkedpatch_create_post = (data) => {

    return User.find({_id: data.userID}).then((user) => {
      if(user[0].overall == false) {
        return {status: 'Save ERROR: The user does not have a overall'};
      }
  
      return LinkedPatch.find({patchID: data.patchID, userID: data.userID}).then((linkedPatch) => {
        if(linkedPatch[0] != null) {
          return {status: 'Save ERROR: The user already linked this patch to his overall'};
        }
  
    return LinkedPatch.create(data).then((linkedPatch) => {
      return {status: 'Save OK: ' + linkedPatch.id};
    }).catch((err) => {
      console.log(err);
      return err;
    });
  });
  });
  };