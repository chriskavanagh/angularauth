const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user.js');


/* body-parser middleware.*/
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
/* ---------------------- */

/* route gets all user */
router.get('/', function(req, res, next){
    User.find({}, 'email', (err, users) => {
        if(err){
            res.json({err: err.message, msg:'Failed to find users'});
        }
        res.send(users);
    });
});


/* route checks if email exists */
router.post('/email-check', (req, res, next) => {
    let useremail = req.body.email;
    console.log(useremail);
	User.findOne({'email': useremail}, 'email', (err, user) => {
		if(err) {
			res.status(400).send({error: err.message});
		}
		if(user) {
			res.json({message: "Email Is Not Available", available: false});
      } else {
            res.json({message: "Email Is Available", available: true});
     }
  });
});


/* route creates / registers user / creates jwttoken */
router.post('/register', (req, res, next) => {
    let email = req.body.email;
    User.findOne({'email': email}, 'email', (err, user) => {
        if (!user) {
            User.create(req.body, (err, user) => {
                if(err){
                    return res.status(500).json({error: err});
                }
                let payload = {subject: user._id};
                let token = jwt.sign(payload, 'secretKey');
                res.status(201).send({token});
            });
      } else {
            res.status(500).json("Email Already Exists!");
        }           
    });    
});


/* login route w/hashed password & jwt */
router.post('/login', (req, res, next) => {
    let userData = req.body;
    User.findOne({'email': userData.email}, 'email password', (err, user) => {
        if (err) {
            console.log(err);
      } else {
            if (!user) {
                res.status(401).send('Invalid Email');
            } else {
                user.verifyPassword(userData.password, (err, valid) => {
                    if (err) {
                        console.log(err);
                    } else if (valid) {
                        let payload = {subject: user._id};
                        let token = jwt.sign(payload, 'secretKey');
                        res.status(200).send({token});
                    } else {
                        res.send('User Not Verified!!!');
                    }
                });
            }
        }
    });
});


module.exports = router;


/* router.post('/register', function(req, res, next) {
    User.create(req.body, (err, user) => {
    if(err){
        return res.status(500).json({error: err});
    }
    res.status(201).send(user);
   });
}); */


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


// alternate way to create obj with constructor.
/* router.post('/register', function(req, res, next) {
    var user = new User({email: req.body.email, password: req.body.password});
    user.save((err, user) => {
        if (err) return console.error(err);
        res.status(201).send(user);
    });
}); */