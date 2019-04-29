'use strict';
const User = require('../models/Users');
const Patch = require('../models/patches');
const Rating = require('../models/ratings');
const LinkedPatch = require('../models/linkedpatches');

exports.rating_create_post = (data) => {
    return Patch.find({_id: data.patchID}).then((patch) => {
      if(patch[0].userID == data.userID) {
        return {status: 'Save ERROR: The patch belongs to this current user'};
      }
  
      return Rating.find({patchID: data.patchID, userID: data.userID}).then((rating) => {
        console.log(rating)
        if(rating[0] != null) {
          return {status: 'Save ERROR: The patch already has a rating from this user'};
        }
  
    return Rating.create(data).then((rating) => {
      return {status: 'Save OK: ' + rating.id};
    }).catch((err) => {
      console.log(err);
      return err;
    });
  });
  });
  };