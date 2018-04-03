const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Ninja = require('../models/ninja');



// body-parser middleware.
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

/* api routes */

router.get('/', function(req, res, next){
    Ninja.find({}, 'name rank available date', function(err, ninjas){
        if(err){
            res.json({err: err.message, msg:'Failed to find user'});
        }
        res.send(ninjas);
    });
});



router.get('/ninja/:name', function(req, res, next){
    console.log(req.params.name);
    Ninja.findOne({'name': req.params.name}, 'name rank date',function(err, ninja){
        if(err) {
            res.status(400).send({error: err.message});
        }
        res.send(ninja);
                
    });
});


// add a new ninja to the db.
router.post('/ninja-create', function(req, res, next){
    Ninja.create(req.body)
    .then(function(ninja){
        res.send(ninja);
  }).catch(next);
});


// update a ninja in the db
router.put('/ninjas/update/:id', function(req, res, next){
    var query = {_id: req.params.id};
    Ninja.findByIdAndUpdate(query, req.body, { new: true },
       function(err, ninja){
           res.send(ninja);
    });
});


// delete a ninja from the db.
router.delete('/ninjas/delete/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}, function(err, ninja){
        if(err){
            res.send(err.message);
        }
            res.send(ninja);
    });
});

/* export router */
module.exports = router;


/* code for express + handlebars (not Angular) */

// find and get all ninjas. route is /api.
/* router.get('/', function(req, res, next){
    Ninja.find({}, 'name rank available date', function(err, ninjas){
        if(err){
            res.json({err: err.message, msg:'Failed to register user'});
        }
        //console.log(err);
        res.render('ninja-list',{
            ninjas: ninjas
        });
    });
}); */


// get a single ninja from the db.
/* router.get('/ninja/:name', function(req, res, next){
    console.log(req.params.name);
    Ninja.findOne({'name': req.params.name}, 'name rank date',function(err, ninja){
        if(err) {
            res.status(400).send({error: err.message});
        }
        if(!ninja) {
            console.log('No results found');
            err = new Error("Ninja not found");
            res.status(404).send("<h2>Ninja Not Found</h2>");
        } else {
            console.log(ninja);
            res.render('ninja',{
                name: ninja.name,
                rank: ninja.rank,
                id: ninja.id,
                date: ninja.date
            });
         }        
    });
}); */


/* // users.handlebars
router.get('/users', function(req, res, next) {
    res.render("users", {user: "Jimmy Page", instrument: "Guitar"});
}); */


// greetings.handlebars
/* router.get('/greetings/:name', function(req, res, next){
    var name = upperCaseFirst(req.params.name);
    res.render('greetings', {name: name});
}); */



