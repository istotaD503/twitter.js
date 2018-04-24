const express = require('express');
const app = express();
const morgan = require('morgan') // logging middleware
const chalk = require('chalk');
const nunjucks = require('nunjucks');

var locals = {
    title : 'List of names',
    people: [
        {name: 'Jack'},
        {name: 'John'}
    ]
};

// nunjucks.render('index.html',locals,(err, output) => {
//     if (err) return console.error(err);
//     console.log(output)
// });

nunjucks.configure('views', {noCache: true}); // where to find views, cache off to see if generator works
app.set('view engine', 'html'); // what file extension do our template have
app.engine('html', nunjucks.render); // how to render html templates

app.use(morgan('dev'));

app.get('/',(req, res) => {
    res.render('index', locals)
});

app.get('/news',(req, res, next) => {
    res.json({name: 'alex', lastName: 'May'});
    next();
})

app.listen('3000',() => console.log('Server is up...'));