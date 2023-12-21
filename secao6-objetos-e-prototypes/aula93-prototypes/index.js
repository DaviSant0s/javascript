function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'Otávio');

const objeto = {
    nome: 'Davi',
    sobrenome: 'Santos'
};

console.dir(objeto);