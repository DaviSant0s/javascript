function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    // chamando o construtor da promise
    return new Promise((resolve, reject) => {

        
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('BAD VALUE');
                return;
            }
            resolve(msg);
        }, tempo);

    });
  
}

function baixaPagina(){
    const emCache = true;

    if (emCache){
        return Promise.resolve('Pagina em cache');
    } else{
        console.log('Baixando página...');
        return esperaAi('Concluído!', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERRO:', e));