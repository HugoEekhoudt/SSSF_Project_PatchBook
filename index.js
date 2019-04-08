require ('custom-env').env()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// if mongoose < 5.x, force ES6 Promise
// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/test`).then(() => {
  console.log('Connected successfully.');
}, err => {
  console.log('Connection to db failed: ' + err);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/loginPage.html')
});

app.post('/login', (req, res) => {
    res.sendFile(__dirname + '/views/loginPage.html')
});

app.post('/register', (req, res) => {
    res.sendFile(__dirname + '/views/loginPage.html')
});

app.get('/logout', (req, res) => {
    res.sendFile(__dirname + '/views/loginPage.html')
});

app.listen(3000); 