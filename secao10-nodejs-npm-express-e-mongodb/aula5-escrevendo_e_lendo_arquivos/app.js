const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const ler = require('./modules/ler');



async function lerArquivo(caminho){
    const dados = await ler(caminho);
    mostraDados(dados);
}

function mostraDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val.nome));
}


lerArquivo(caminhoArquivo);

