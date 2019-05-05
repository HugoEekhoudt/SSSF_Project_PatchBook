'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


const login = (req, res, next) => {
    if(req.user){
        next()
    }else{
        res.redirect('/api/login')
    }
  }
  
/**
     * @api {post} /register postSingleUser
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
     * @api {get} /user getSingleUser
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
     * @api {get} /userID getUserIDByLogin
     * @apiGroup User
     * @apiSuccess {json} userID
     */
    router.get('/userID', login, function (req, res) {
            res.send(req.user.id);
    });

/**
     * @api {patch} /user patchSingleUser
     * @apiGroup User
     * @apiParam {Number} idOfUserToUpdate
     * @apiParam {String} username
     * @apiParam {String} password
     * @apiParam {Bool} overall
     * @apiSuccess {json} user
     */
router.patch('/user', login, (req, res) => {
    const data = req.body;
    userController.user_update_single(data).then((result) => {
        res.send(result);
    });
});

router.post('/logout', function(req, res){
    req.logout()
    res.redirect('/api/login')
  })

module.exports = router;