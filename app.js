const express = require('express');
const app = express();
const morgan = require('morgan') // logging middleware
const chalk = require('chalk');

app.use(morgan('dev'));

app.get('/',(req, res) => {
    res.send(chalk.red('Hello World!\n'));
})

app.get('/news',(req, res, next) => {
    res.json({name: 'alex', lastName: 'May'});
    next();
})

app.listen('1337',() => console.log('Server is up...'));