// DEPENDENCIES
var express = require('express');
var path = require('path');
var _ = require('lodash');

var router = express.Router();

var models = require('../models');
var modelController = require('./model-controllers.js');

var middleware = require('./../middleware/middleware.js')();

// ROUTES
// NON-authenticated Users=================================================
// Setting root ('/') path to index.html
router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, './../../client/public/index.html'));
});

router.post('/api/users/create', function(req,res){
    if (req.body.password !== req.body.confirmPassword){
      return reject();
    }
    modelController.userCreate(
      req.body.name,
      req.body.username,
      req.body.password,
    function(success){
      res.json(success);
    });
});

router.post('/api/users/login', function (req, res) {
  var body = _.pick(req.body, 'username', 'password');
  var userInfo;
  
  models.User.authenticate(body).then(function (user) {
        var token = user.generateToken('authentication');
        userInfo = user;

        return models.Token.create({
          token: token
        });
      }).then(function (tokenInstance) {
        res.header('Auth', tokenInstance.get('token')).json(userInfo.toPublicJSON());
      }).catch(function () {
        res.status(401).send();
      });
});

router.delete('/api/users/logout', middleware.requireAuthentication, function (req, res) {
  req.token.destroy().then(function () {
    res.status(204).send();
  }).catch(function () {
    res.status(500).send();
  });
});

router.get('/api/userhome', middleware.requireAuthentication, function(req, res){
    modelController.userHome(
      req.user.id,
      function(data){
        res.json(data)
    });
});

router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './../../client/public/index.html'));
})

module.exports = router;