'use strict';
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

//Checked with postman
router.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html')
});

/**
     * @api {get} /api/patches getAllPatches
     * @apiGroup Patch
     * @apiSuccess {json} patches
     */
router.get('/patches',(req, res) => {
    apiController.patches_list_get().then((result) => {
        res.send(result);
      });
});

/**
     * @api {get} /api/user getSingleUser
     * @apiGroup User
     * @apiParam {Number} userID
     * @apiSuccess {json} user
     */
router.get('/user', function(req, res) {
    apiController.user_get_single(req.query.userID).then((result) => {
        res.send(result);
      });
});

/**
     * @api {patch} /api/user patchSingleUser
     * @apiGroup User
     * @apiParam {Number} idOfUserToUpdate
     * @apiParam {String} username
     * @apiParam {String} password
     * @apiParam {Bool} overall
     * @apiSuccess {json} user
     */
router.patch('/user', (req, res) => {
  const data = req.body;
  apiController.user_update_single(data).then((result) => {
    res.send(result);
  });
});

/**
     * @api {post} /api/register postSingleUser
     * @apiGroup User
     * @apiParam {String} username
     * @apiParam {String} password
     * @apiParam {Bool} overall
     * @apiSuccess {json} user
     */
router.post('/register', (req, res) => {
    const data = req.body;
    apiController.user_create_post(data).then((result) => {
      res.send(result);
    });
});

/**
     * @api {post} /api/patch postSinglePatch
     * @apiGroup Patch
     * @apiParam {String} name
     * @apiParam {String} description
     * @apiParam {String} image
     * @apiParam {String} userID
     * @apiSuccess {json} patch
     */
router.post('/patch', (req, res) => {
    const data = req.body;
    apiController.patch_create_post(data).then((result) => {
      res.send(result);
    });
});

/**
     * @api {patch} /api/patch patchSinglePatch
     * @apiGroup Patch
     * @apiParam {String} idOfPatchToUpdate
     * @apiParam {String} name
     * @apiParam {String} description
     * @apiParam {String} image
     * @apiSuccess {json} patch
     */
router.patch('/patch', (req, res) => {
  const data = req.body;
  apiController.patch_update_single(data).then((result) => {
    res.send(result);
  });
});

/**
     * @api {delete} /api/patch deleteSinglePatch
     * @apiGroup Patch
     * @apiParam {String} patchID
     * @apiSuccess {json} patch
     */
router.delete('/patch', (req, res) => {
  apiController.patch_delete_single(req.query.patchID).then((result) => {
    res.send(result);
  });
});

/**
     * @api {post} /api/rating postSingleRating
     * @apiGroup Rating
     * @apiParam {Number} ratingValue
     * @apiParam {String} patchID
     * @apiParam {String} userID
     * @apiSuccess {json} rating
     */
router.post('/rating', (req, res) => {
  const data = req.body;
  apiController.rating_create_post(data).then((result) => {
    res.send(result);
  });
});

/**
     * @api {post} /api/linkedpatch postSingleLinkedpatch
     * @apiGroup LinkedPatch
     * @apiParam {String} patchID
     * @apiParam {String} userID
     * @apiSuccess {json} linkedpatch
     */
router.post('/linkedpatch', (req, res) => {
  const data = req.body;
  apiController.linkedpatch_create_post(data).then((result) => {
    res.send(result);
  });
});

module.exports = router;
