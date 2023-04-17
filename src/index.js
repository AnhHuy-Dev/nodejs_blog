const path = require('path');
//Express
const express = require('express');
const app = express();
const port = 3000;
//Static files in Express
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); //Middleware for POST method
app.use(express.json()); //Middleware for XMLHttpsrequest, axios, fetch, ajax...

//Method Override
//Change default form (GET, POST) => PUT, PATH, DELTE...
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Morgan
// const morgan = require("morgan");
// app.use(morgan("combined"));

//Handlebars
const handlebars = require('express-handlebars');
const exp = require('constants');

app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs', //Change .handlebars -> .hbs
        helpers: {
            sum: (a, b) => a + b,
            getPage: (n, block) => {
                //loop in handlebar not use #each
                var accum = '';
                for (var i = 0; i < n; ++i) accum += block.fn(i);
                return accum;
            },
        },
    }),
);

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views')); //mean /resource/views

//Route init
const route = require('./routes');
route(app);

const db = require('./config/db');
db.connect();

app.listen(port);
