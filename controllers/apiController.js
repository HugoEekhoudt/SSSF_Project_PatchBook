'use strict';
const User = require('../models/Users');
const Patch = require('../models/patches');
const Rating = require('../models/ratings');
const LinkedPatch = require('../models/linkedpatches');

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

exports.user_update_single = (data) => {
    return User.updateOne({_id: data.idOfUserToUpdate},{username: data.username, password: data.password, overall: data.overall}, (err, data) => {
      return {status: 'Update OK: ' + data};
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