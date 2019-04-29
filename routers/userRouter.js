'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

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
        userController.user_create_post(data).then((result) => {
          res.send(result);
        });
    });

/**
     * @api {get} /api/user getSingleUser
     * @apiGroup User
     * @apiParam {Number} userID
     * @apiSuccess {json} user
     */
router.get('/user', function (req, res) {
    userController.user_get_single(req.query.userID).then((result) => {
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
    userController.user_update_single(data).then((result) => {
        res.send(result);
    });
});

module.exports = router;