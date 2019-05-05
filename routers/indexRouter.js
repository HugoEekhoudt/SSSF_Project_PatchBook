'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.use(passport.initialize());
router.use(passport.session());

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

 const login = (req, res, next) => {
  if(req.user){
      next()
  }else{
      res.redirect('/api/login')
  }
}

passport.serializeUser(function(user, done) {
done(null, user.id);
});

passport.deserializeUser(function(id, done) {
User.findById(id, function (err, user) {
  done(err, user);
});
});

router.get('/', login,(req, res) => {
  res.sendFile(__dirname + '/index.html')
});

router.get('/login',(req, res) => {
  res.sendFile(__dirname + '/login.html')
});

router.get('/updatePatch', login, (req, res) => {
  res.sendFile(__dirname + '/updatePatch.html')
});

router.post('/login', 
  passport.authenticate('local', { 
    successRedirect: '/api', 
    failureRedirect: '/login' })
);

module.exports = router;
