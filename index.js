require ('custom-env').env()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const session = require('express-session')

app.use(bodyParser())
app.use(session({ secret: process.env.SessionSeed, resave: false, saveUninitialized: false }))
app.use(bodyParser.urlencoded({extended: true}));

// if mongoose < 5.x, force ES6 Promise
// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/test`).then(() => {
  console.log('Connected successfully.');
}, err => {
  console.log('Connection to db failed: ' + err);
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
  username:  String,
  password: String,
});
const User = mongoose.model('User', userSchema);

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
    console.log(req.body)
    User.create({username: req.body.regUsername, password: req.body.regPassword}).then(post => {
        console.log(post.id);
     }).catch(function(error){
        console.log('Error getting the posts');
    });
     res.sendFile(__dirname + '/views/loginPage.html')
});

app.get('/logout', (req, res) => {
    res.sendFile(__dirname + '/views/loginPage.html')
});

app.listen(3000); 