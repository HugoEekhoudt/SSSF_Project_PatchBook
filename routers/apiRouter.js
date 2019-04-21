'use strict';
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

//Checked with postman
router.get('/patches',(req, res) => {
    apiController.patches_list_get().then((result) => {
        res.send(result);
      });
});

//Checked with postman
router.get('/user', function(req, res) {
    apiController.user_get_single(req.query.userID).then((result) => {
        res.send(result);
      });
});

//Checked with postman
router.patch('/user', (req, res) => {
  const data = req.body;
  console.log(data);
  apiController.user_update_single(data).then((result) => {
    res.send(result);
  });
});

//Checked with postman
router.post('/register', (req, res) => {
    const data = req.body;
    console.log(data);
    apiController.user_create_post(data).then((result) => {
      res.send(result);
    });
});

//Checked with postman
router.post('/patch', (req, res) => {
    const data = req.body;
    console.log(data);
    apiController.patch_create_post(data).then((result) => {
      res.send(result);
    });
});

//Checked with postman
router.patch('/patch', (req, res) => {
  const data = req.body;
  console.log(data);
  apiController.patch_update_single(data).then((result) => {
    res.send(result);
  });
});

//Checked with postman
router.delete('/patch', (req, res) => {
  apiController.patch_delete_single(req.query.patchID).then((result) => {
    res.send(result);
  });
});

//Checked with postman
router.post('/rating', (req, res) => {
  const data = req.body;
  console.log(data);
  apiController.rating_create_post(data).then((result) => {
    res.send(result);
  });
});

module.exports = router;
