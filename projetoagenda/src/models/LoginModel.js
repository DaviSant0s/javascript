const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

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

    async login() {
        // Daz as valições das informações
        this.valida();
        if (this.errors.length > 0) {
            return;
        }

        // verifica se tem esse email no banco de dados
        this.user = await LoginModel.findOne({ email: this.body.email });

        // Se não existir esse email na base de dados retorna um erro
        if(!this.user) {
            this.errors.push('Usuário não existe');
            return;
        }

        // Verifica a senha é igual ao que tá na base de dados
        // Se não existir, retorna um erro e seta this.user como null novamente
        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }

    }

    async register() {

        // Daz as valições das informações
        this.valida();
        if (this.errors.length > 0) {
            return;
        }

        // Se deu tudo certo nas validações, também vamos verificar se o usuário já existe
        await this.userExists();
        
        // Daí verificamos mais uma vez se existe algum erro, se sim colocamos no array de erros e esse erro vai aparecer na tela
        if (this.errors.length > 0) {
            return;
        }

        /* Se passar pra cá registra o usuário */

        // "criptografando a senha"
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        // Aqui ela tá registrando os dados na base de dados e retornando os dados para o user.

        this.user = await LoginModel.create(this.body);
        
    }

    async userExists() {
        // Isso vai retornar o usuário ou null
        const user = await LoginModel.findOne({ email: this.body.email });

        if (user) {
            return this.errors.push('Usuário já existe!');
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