const express = require('express');
const app = express();
const morgan = require('morgan') // logging middleware
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const bodyParser = require('body-parser')

// var locals = {
//     title : 'List of names',
//     people: [
//         {name: 'Jack'},
//         {name: 'John'}
//     ]
// };

// nunjucks.render('index.html',locals,(err, output) => {
//     if (err) return console.error(err);
//     console.log(output)
// });

nunjucks.configure('views', {noCache: true}); // where to find views, cache off to see if generator works
app.set('view engine', 'html'); // what file extension do our template have
app.engine('html', nunjucks.render); // how to render html templates

app.use(morgan('dev'));

//typical way of using express static middleware
app.use(express.static(__dirname + '/public')); //express.static RETURN a function which may be used by middleware.

app.use(bodyParser.urlencoded({extended: true})); //for HTML form submits
app.use(bodyParser.json()); //for AJAX requests

app.use(routes);

app.listen('1337',() => console.log('Server is up...'));

// app.use(function(req,res, next) { // doesn't work!
//     var mimeType = mime.lookup(req.path);
//     fs.readFile('./public' + req.path, (err, fileBuffer) => {
//         if (err) return next();
//         res.header('Content-type', mimeType);
//         res.send(fileBuffer);
//     })
// });