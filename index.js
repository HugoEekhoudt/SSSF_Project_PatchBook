require ('custom-env').env()
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const apiRouter = require('./routers/apiRouter');

app.use(bodyParser())
app.use(session({ secret: process.env.SessionSeed, resave: false, saveUninitialized: false }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/images",express.static('images'))
app.use('/api', apiRouter)

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

app.use("/apidoc", express.static('./apidocs'))

app.listen(3000); 