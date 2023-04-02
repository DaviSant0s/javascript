
// A função prompt sempre retor uma string
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;
const texto = document.getElementById('texto');

texto.innerHTML = ''
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com 2 casas decimais: ${numero.toFixed(2)}</p>`;

