'use strict'

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/',(req,res,next) => {
    var tweets = tweetBank.list();
    console.log(tweets)
    res.render('index', { title: 'Twitter.js', tweets: tweets})
});


module.exports = router;