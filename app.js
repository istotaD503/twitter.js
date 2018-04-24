const express = require('express');
const app = express();
const chalk = require('chalk');

app.get('/',(req, res) => {
    res.send('Hello World!');
})

app.get('/news',(req, res) => {
    res.send('News route');
})


app.listen('3000',() => console.log('Server is up...'));