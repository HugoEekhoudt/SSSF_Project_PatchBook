require ('custom-env').env()
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
app.use(passport.session())


var Schema = mongoose.Schema;
var userSchema = new Schema({
  username:  String,
  password: String,
});
const User = mongoose.model('User', userSchema);

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
    (username, password, done) => {
        if (username !== process.env.USER || password !== process.env.PASS) {
            console.log("fout")
            done(null, false, {message: 'Incorrect credentials.'});
            return;
        }
        console.log("Ingelogd")
        return done(null, {id: process.env.USER}); // returned object usally contains something to identify the user
    }
));
  
  passport.serializeUser(function(user, cb) {
    console.log('Serial')
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    console.log('Deserial')
    cb(null, {id: id});
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/index', login, (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/loginPage.html')
});

app.post('/login', (req, res) => {
    passport.authenticate('local', { 
        successRedirect: '/index', 
        failureRedirect: '/login' })
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
    req.logout()
    res.redirect('/login')
});

app.listen(3000); 