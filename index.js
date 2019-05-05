require ('custom-env').env()
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const session = require('express-session')
const indexRouter = require('./routers/indexRouter');
const patchRouter = require('./routers/patchRouter');
const linkedPatchRouter = require('./routers/linkedPatchRouter');
const userRouter = require('./routers/userRouter');
const ratingRouter = require('./routers/ratingRouter');

app.use(bodyParser())

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method==='OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
  return res.status(200).json({

  })
  }
  next()
})

app.use(session({ secret: process.env.SessionSeed, resave: false, saveUninitialized: false }))
app.use(bodyParser.urlencoded({extended: true}));
app.use("/images",express.static('images'))
app.use('/api', indexRouter, patchRouter, linkedPatchRouter, userRouter, ratingRouter)

// if mongoose < 5.x, force ES6 Promise
// mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.db}`).then(() => {
  console.log('Connected successfully.');
}, err => {
  console.log('Connection to db failed: ' + err);
});

app.use("/apidoc", express.static('./apidocs'))

app.listen(3000); 