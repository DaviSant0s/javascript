function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    // chamando o construtor da promise
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string'){
            reject('BAD VALUE')
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);

    });

    
}

esperaAi('frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(22222, rand(1, 3));
    })

    .then(resposta => {
        console.log(resposta);
        return esperaAi('frase 3', rand(1, 3));
    })

    .then(resposta => {
        console.log(resposta);
    })

    .catch(erro => {
        console.log('Erro:', erro);
    });





