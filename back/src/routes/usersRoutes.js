var express = require('express');
var app = express();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
app.post('/login', userController.login);
app.get('/', userController.index);
app.get('/:id', auth.verifyToken, userController.show);
app.put('/:id', auth.verifyToken, userController.update);

module.exports = app;