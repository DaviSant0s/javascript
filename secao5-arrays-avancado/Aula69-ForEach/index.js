const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let soma = 0;

a1.forEach((valor, indice, array) => {
  soma += valor;
});

console.log(soma);

