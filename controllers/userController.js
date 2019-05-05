'use strict';
const User = require('../models/users');
const Patch = require('../models/patches');
const Rating = require('../models/ratings');
const LinkedPatch = require('../models/linkedpatches');

exports.user_get_single = (id) => {
    return User.find({_id: id}).then((user) => {
      return user;
    }).catch((err) => {
      console.log(err);
      return err;
    });
};

exports.user_create_post = (data) => {
    return User.create(data).then((user) => {
      return {status: 'Save OK: ' + user.id};
    }).catch((err) => {
      console.log(err);
      return err;
    });
  };

exports.user_update_single = (data) => {
    return User.updateOne({_id: data.idOfUserToUpdate},{username: data.username, password: data.password, overall: data.overall}, (err, data) => {
      return {status: 'Update OK: ' + data};
    }).catch((err) => {
      console.log(err);
      return err;
    });
};