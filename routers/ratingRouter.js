'use strict';
const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

const login = (req, res, next) => {
  if(req.user){
      next()
  }else{
      res.redirect('/api/login')
  }
}

/**
     * @api {post} /api/rating postSingleRating
     * @apiGroup Rating
     * @apiParam {Number} ratingValue
     * @apiParam {String} patchID
     * @apiParam {String} userID
     * @apiSuccess {json} rating
     */
router.post('/rating', login, (req, res) => {
  var data = req.body;
  console.log(data)
  data.userID = req.user.id
  ratingController.rating_create_post(data).then((result) => {
    res.send(result);
  });
});

module.exports = router;