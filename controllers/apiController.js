'use strict';
const User = require('../models/Users');
const Patch = require('../models/patches');
const Rating = require('../models/ratings');

exports.patches_list_get = () => {
    return Patch.find().then((patches) => {
      return patches;
    }).catch((err) => {
      console.log(err);
      return err;
    });
};

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

exports.patch_create_post = (data) => {
    return Patch.create(data).then((patch) => {
      return {status: 'Save OK: ' + patch.id};
    }).catch((err) => {
      console.log(err);
      return err;
    });
};

exports.rating_create_post = (data) => {
  return Rating.create(data).then((rating) => {
    return {status: 'Save OK: ' + rating.id};
  }).catch((err) => {
    console.log(err);
    return err;
  });
};

exports.patch_update_single = (data) => {
  return Patch.updateOne({_id: data.idOfPatchToUpdate},{name: data.name, description: data.description, image: data.image}, (err, data) => {
    return {status: 'Update OK: ' + data};
  }).catch((err) => {
    console.log(err);
    return err;
  });
};

exports.patch_delete_single = (id) => {
  return Patch.deleteOne({_id: id}).then((patch) => {
  return Rating.deleteOne({patchID: id}).then((rating) => {
    return {status: 'Delete Patch OK: ' + patch.id + ' ' + rating.id };
  }).catch((err) => {
    console.log(err);
    return err;
  });
});
};