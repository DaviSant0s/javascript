const nome = 'Davi';
const sobrenome = 'Santos';

const falaNome = () => {
    return nome + ' ' + sobrenome;
} 

module.exports = {
    nome, sobrenome, falaNome
}

exports.nada = 'nada';

console.log(module);