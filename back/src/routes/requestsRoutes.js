var express = require('express');
var app = express();
const requestController = require('../controllers/requestController');
const auth = require('../middlewares/auth');

//request routes
app.post('/new', auth.verifyToken, requestController.create);
app.get('/', auth.verifyToken, requestController.index);

module.exports = app;