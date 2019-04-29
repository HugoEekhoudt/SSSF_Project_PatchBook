'use strict';
const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

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
  ratingController.rating_create_post(data).then((result) => {
    res.send(result);
  });
});

module.exports = router;