function relogio(){
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }


    function iniciaRelogio(){
        segundos += 1;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }

    document.addEventListener('click', (e) => {
        const elemento = e.target
        
        if (elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            timer = setInterval(iniciaRelogio, 1000);

        } else if (elemento.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer)


        }else if (elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado')
            segundos = 0
            relogio.innerHTML = criaHoraDosSegundos(segundos);
            clearInterval(timer)
        }
    });
    
}

relogio();
