'use strict';
const express = require('express');
const router = express.Router();

//Checked with postman
router.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html')
});

module.exports = router;
