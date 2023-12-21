function rand(min=0, max=3){
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

async function executa(){
    try{
        const fase1 = await esperaAi('Fase 1', 2000);
        console.log(fase1)

        setTimeout(() => {
            console.log('Essa promise estava pendente:', fase1);
        }, 3000)

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3)
        console.log('Terminamos na', fase3);
    } catch(e){
        console.log(e);
    }

}

executa();




















/* esperaAi('Fase 1', rand())
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase
    })
    .then(fase => {
        console.log('Terminamos na', fase);
    })
    .catch(e => console.log(e)); */