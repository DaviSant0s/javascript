const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};

Object.freeze(pessoa1);

pessoa1.nome = 'Davisis';
console.log(pessoa1);

