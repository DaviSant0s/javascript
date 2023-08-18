function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);


setTimeout(function(){
    // para a execução contida no timer
    clearInterval(timer);
}, 5000);