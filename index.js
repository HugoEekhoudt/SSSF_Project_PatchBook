require ('custom-env').env()
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser())
app.use(session({ secret: process.env.SessionSeed, resave: false, saveUninitialized: false }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());


var Schema = mongoose.Schema;
var userSchema = new Schema({
  username:  String,
  password: String,
});
const User = mongoose.model('User', userSchema);

var patchSchema = mongoose.Schema;
var patchSchema = new patchSchema({
  name:  String,
  description: String,
  image: String,
  userID: String
});
const Patch = mongoose.model('Patch', patchSchema);

// if mongoose < 5.x, force ES6 Promise
// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/test`).then(() => {
  console.log('Connected successfully.');
}, err => {
  console.log('Connection to db failed: ' + err);
});

const login = (req, res, next) => {
    if(req.user){
        next()
    }else{
        res.redirect('/login')
    }
  }

  passport.use(new LocalStrategy(
 
    function(username, password, done) {
       User.findOne({ username: username }, function(err, user) {
       if (err) { return done(err); }
        if (!user)
        {
                 return done(null, false, { message: 'Incorrect username.' });
        }
            if (!user.password == password)
       {
               return done(null, false, { message: 'Incorrect password.' });
             }
       return done(null, user, { message: 'correct user.' });
       });
       }
   ));
  
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get('/', login, (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/index', login, (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/loginPage.html')
});

app.get('/createPatch', login, (req, res) => {
  res.sendFile(__dirname + '/views/createPatch.html')
});

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

  app.get('/user', login, function(req, res) {
    res.send(req.user)
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

app.post('/createPatch', login, (req, res) => {
  console.log(req.body)
  Patch.create(req.body).then(post => {
     console.log(post.id);
  });
  res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
});

app.listen(3000); 