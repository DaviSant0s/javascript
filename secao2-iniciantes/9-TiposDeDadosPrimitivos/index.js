// String, number, undefined, null, boolean e symbol -> vamos falar posteriormente.

const nome1 = 'Luiz'; // String
const nome2 = "Luiz"; // String
const nome3 = `Luiz`; // String
const num1 = 10; //number
const num2 = 10.52; // number
let nomeAluno; // undefined --> Não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Null -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (Lógico)


let a = 2;
let b = a;

console.log(a, b);

a = 3;

console.log(a, b);