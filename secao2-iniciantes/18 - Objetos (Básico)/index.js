const pessoa1 = {
    nome: 'Davi',
    sobrenome: 'Santos',
    idade: 22,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();