const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user.js');


/* body-parser middleware.*/
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));


/* ----------------------- */

router.get('/', function(req, res, next){
    User.find({}, 'email', function(err, users){
        if(err){
            res.json({err: err.message, msg:'Failed to find users'});
        }
        res.send(users);
    });
});


router.post('/register', function(req, res, next) {
    User.create(req.body, (err, user) => {
    if(err){
        return res.status(500).json({error: err});
    }
    res.status(201).send(user);
   });
});

// Verify password with callback => Valid (callback) 
/* User.verifyPassword('mySecretPassword', function(err, valid) {
    if (err) {
      console.log(err)
    } else if (valid) {
      console.log('Valid (callback)');
    } else {
      console.log('Invalid (callback)');
    }
  }); */


module.exports = router;


/* router.post('/register', function(req, res, next) {
    User.create({email: req.body.email, password: req.body.password},(err, user)=>{
    if(err){
        return res.status(500).json({error: err});
    }
    res.status(201).send(user);
   });
}); */ 


// alternate way to create obj with constructor.
/* router.post('/register', function(req, res, next) {
    var user = new User({email: req.body.email, password: req.body.password});
    user.save((err, user) => {
        if (err) return console.error(err);
        res.status(201).send(user);
    });
}); */


// static method in UserSchema. (not used yet)
/* User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
    if (error || !user) {
      var err = new Error('Wrong email or password.');
      err.status = 401;
      return next(err);
    } else {
      req.session.userId = user._id;
      return res.redirect('/profile');
    }
  });
} else {
  var err = new Error('All fields required.');
  err.status = 400;
  return next(err);
} */