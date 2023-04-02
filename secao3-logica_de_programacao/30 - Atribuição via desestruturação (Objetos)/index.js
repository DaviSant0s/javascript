const pessoa = {
    nome: 'Davi',
    sobrenome: 'Santos',
    idade: 22,
    endereco: {
        rua: 'Francesco feo',
        numero: 53
    }
};

const {endereco: {rua: rua1='', numero}, endereco} = pessoa;

console.log(rua1, numero, endereco);