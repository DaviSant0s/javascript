const mongoose = require('mongoose');

// Schema é a modelagem dos nossos dados
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

// O trabalho do model é trabalhar com dados
const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;