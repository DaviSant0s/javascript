const pessoas = [
    {nome: 'Luiz', idade: 100},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 10},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, elemento) => {

    if (elemento.idade > acumulador.idade){
        return elemento;  
    }

    return acumulador;
});

console.log(pessoaMaisVelha);