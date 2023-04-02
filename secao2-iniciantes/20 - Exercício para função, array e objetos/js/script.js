function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    array = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        array.push({nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value });
        console.log(array);
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

        //console.log(nome.value, sobrenome, peso, altura);
    }

    // form adiciona um escutador de eventos no meu formulário
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
