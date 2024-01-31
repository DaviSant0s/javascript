const express = require('express');
const route = express.Router();
// importando o controller
const homeController = require('./src/controllers/homeController');


// A rota é que decide qual o controller que vai controlar aquela rota
// O único trabalho do controller é decidir, o model da rota e esse aqui é o view, ou seja, escolher qual o model e view que vai ser utilizado
// é o seguinte: a rota escolher o controller, e o controller escolher qual o model e view que vai ser utlizado
// Rotas home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);



// para ser possível exportar
module.exports = route;