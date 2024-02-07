const mongoose = require('mongoose');
const validator = require('validator');

// Schema é a modelagem dos nossos dados
const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    criadoEm: {type: Date, default: Date.now},
});

// O trabalho do model é trabalhar com dados
const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function() {
    this.valida();
    if (this.errors.length > 0) {
        return;
    }

    // Se passar daqui registra na base de dados

    this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function() {
    this.cleanUp();

    /* validação */

    // O email precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) {
        this.errors.push('E-mail inválido!');
    }

    if (!this.body.nome) {
        this.errors.push('Nome é um campo obrigatório!');
    }

    if (!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado!');
    }
}

Contato.prototype.cleanUp = function() {
    for(let key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }


    // Garantir que a gente só tenha os campos que a gente precisa
    // Que, no caso, é email e senha
    // não podemos permitir que o csrf vá para a base de dados
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;

    this.valida();
    if (this.errors.length > 0) {
        return;
    }

    // o significa que é pra retornar os dados atualizados e não os antigos
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true});
}

// metodos estáticos, que não vão para o prototype
// Não tem acessoa a palavra this

Contato.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
}

Contato.buscaContatos = async function() {

    // 1 para crescente e -1 para decrescente
    const contatos = await ContatoModel.find().sort({criadoEm: -1});
    return contatos;
}

Contato.delete = async function(id) {
    if(typeof id !== 'string') return;

    // 1 para crescente e -1 para decrescente
    const contato = await ContatoModel.findOneAndDelete({_id: id})
    return contato;
}

module.exports = Contato;