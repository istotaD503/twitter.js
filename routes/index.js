'use strict'

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/',(req,res,next) => {
    var tweets = tweetBank.list();
    console.log(tweets)
    res.render('index', { title: 'Twitter.js', tweets: tweets })
});

// router.get('/stylesheets/style.css', (rew,res,next) => {
//     res.sendFile('stylesheets/style.css', {root: __dirname + '/../public'});
// })

module.exports = router;