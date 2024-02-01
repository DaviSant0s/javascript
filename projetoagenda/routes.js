const express = require('express');
const route = express.Router();

// importando o controller
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas do home
route.get('/', homeController.index); 


// Rotas do login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;