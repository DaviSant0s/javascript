const mongoose = require('mongoose');
const validator = require('validator');

// Schema é a modelagem dos nossos dados
const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
});

// O trabalho do model é trabalhar com dados
const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        // vamos passar o bory para todos os métodos da classe
        this.body = body;
        // se tiver algum erro no array, não posso cadastrar o usuário
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) {
            return;
        }

        /* Se passar pra cá registra o usuário */

        // Aqui ela tá registrando os dados na base de dados e retornando os dados para o user.

        try {
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e);
        }
    }

    valida() {
        this.cleanUp();

        /* validação */

        // O email precisa ser válido
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        }


        // A senha precisa ser entre 3 a 50
        if ( this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 a 50 caracteres.');
        }
    }

    cleanUp() {
        for(let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }


        // Garantir que a gente só tenha os campos que a gente precisa
        // Que, no caso, é email e senha
        // não podemos permitir que o csrf vá para a base de dados
        this.body = {
            email: this.body.email,
            password: this.body.password,
        }


    }



}

module.exports = Login;