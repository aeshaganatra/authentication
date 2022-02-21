var express = require('express');
var router = express.Router();
let indexController = require('../Controller/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/pages/home', { title: "My Portfolio",displayName: req.user ? req.user.displayName : ''});
});

router.get('/aboutMe', function(req, res, next) {
  res.render('../views/pages/aboutMe', { title: "Know Me!",displayName: req.user ? req.user.displayName : ''});
});

router.get('/services', function(req, res, next) {
  res.render('../views/pages/services', { title: "Services",displayName: req.user ? req.user.displayName : ''});
});

router.get('/skillSet', function(req, res, next) {
  res.render('../views/pages/skillSet', { title: "My Arsenal",displayName: req.user ? req.user.displayName : ''});
});


router.get('/contactMe', function(req, res, next) {
  res.render('../views/pages/contactMe', { title: "Contact Me!",displayName: req.user ? req.user.displayName : ''});
});

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the regiter */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the registration  */
router.post('/register', indexController.processRegisterPage);

/* GET to perform logout  */
router.get('/logout', indexController.performLogout);
module.exports = router;
