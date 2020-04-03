var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/works', function(req, res, next) {
    res.render('works');
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

// router.get('/test', function(req, res, next) {
//     res.render('tqdat');
// })

// router.get('/test2', function(req, res, next) {
//     res.render('test');
// })

module.exports = router;