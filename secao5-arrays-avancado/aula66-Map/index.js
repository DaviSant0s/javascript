const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const idade = pessoas.map((objeto, indice) => {

    const novoObjeto = {...objeto};
    novoObjeto.id = indice + 1;

    return novoObjeto;

});

console.log(idade);
console.log(pessoas);