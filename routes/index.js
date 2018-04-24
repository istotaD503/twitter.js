'use strict'

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/',(req,res,next) => {
    var allTweets = tweetBank.list();
    res.render('index', { title: 'Twitter.js', tweets: allTweets, showForm: true })
});

router.get('/users/:name', function(req,res,next) {
    var tweetsForName = tweetBank.find({name: req.params.name});
    res.render('index', { title: 'Twitter.js', tweets: tweetsForName, showForm: true, username : req.params.name})
})

router.get('/tweets/:tweetID', function(req,res,next) {
    var tweetsForID = tweetBank.find({id: +req.params.tweetID});
    res.render('index', { title: 'Twitter.js', tweets: tweetsForID })
})

router.post('/tweets', function(req, res, next) {
    tweetBank.add(req.body.name, req.body.text);
    res.redirect('/');
})

module.exports = router;

// router.get('/stylesheets/style.css', (rew,res,next) => {
//     res.sendFile('stylesheets/style.css', {root: __dirname + '/../public'});
// })