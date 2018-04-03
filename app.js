const express = require('express');
const app = express();
const expressValidator = require('express-validator');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
var upperCaseFirst = require('upper-case-first');
const path = require('path');

const exphbs  = require('express-handlebars');
const routes = require('./routes/api');

const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const morgan = require('morgan');

const cors = require('cors');
//const port = process.env.NODE_PORT; set in Environment Variables For Chris
const port = process.env.PORT || 4000;


/*- connect mongodb -*/
mongoose.connect('mongodb://localhost:27017/ninjago');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
    console.log(`Connected to db=${db.name} on PORT=${db.port}`);
});
/* -------------------------- */

/*- cors middleware.-*/
app.use(cors());
/* --------------------------- */


/*- morgan logging middleware.-*/
app.use(morgan('dev'));
/* -------------------------- */


/*- body-parser middleware.-*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/* -------------------------- */


/*- add routes from /router/api & /router/user.-*/
app.use('/api', routes); 
app.use('/user', userRoutes);
/* -------------------------- */


/* cookie parser middleware */
app.use(cookieParser());


/* express-session middleware */
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));
  /* -------------------------- */


/*- set static folders.-*/
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'views')));
//app.set('views', path.join(__dirname, 'views'));
/* -------------------------- */


/*- set express-handlebars as template engine.-*/
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
/* -------------------------- */


/* express-validator middleware.*/
app.use(expressValidator());
/* -------------------------- */


/* error handling middleware.*/
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
    next();
    response.end();
});
/* -------------------------- */

// optional middleware to check body in shell.
/* app.use(function (req, res, next) {
    console.log(req.body); // populated!
    next();
    
}); */


// home route
/* app.get('/', function(req, res) {
    res.render("home");
}); */

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(port, function () {
	console.log("Server Running On Port 4000...");
});
