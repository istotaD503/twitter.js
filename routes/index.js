'use strict'

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/',(req,res,next) => {
    var allTweets = tweetBank.list();
    res.render('index', { title: 'Twitter.js', tweets: allTweets })
});

router.get('/users/:name', function(req,res,next) {
    var tweetsForName = tweetBank.find({name: req.params.name});
    res.render('index', { title: 'Twitter.js', tweets: tweetsForName })
})

router.get('/tweets/:tweetID', function(req,res,next) {
    var tweetsForID = tweetBank.find({id: +req.params.tweetID});
    console.log(req.params.tweetID)
    res.render('index', { title: 'Twitter.js', tweets: tweetsForID })
})

module.exports = router;

// router.get('/stylesheets/style.css', (rew,res,next) => {
//     res.sendFile('stylesheets/style.css', {root: __dirname + '/../public'});
// })