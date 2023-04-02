const objeto = {
    nome: 'davi',
    sobrenome: 'santos',
    peso: '63',
    altura: '1,75'
};

const { nome, sobrenome, ...resto} = objeto;

console.log(nome, sobrenome);
console.log(resto);

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [um, dois, ...resto] = numeros;

console.log(um, dois, resto); // 1 2 [3, 4, 5, 6, 7, 8, 9] */