var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/projects', function(req, res, next) {
    res.render('projects');
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

router.get('/projects/my-very-first-step-from-motion-design-to-ui-design', function(req, res, next) {
    res.render('New look new story xotours vn');
});

module.exports = router;