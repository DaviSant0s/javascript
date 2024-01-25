const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')

// Rotas home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);



// para ser possível exportar
module.exports = route;