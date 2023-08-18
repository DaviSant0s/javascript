function meuEscopo() {
    // Selecionamos o formulário através da classe 'form' e com o querySelector a gente seleciona os elementos como a gente selecionaria classes em CSS
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    array = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        // form.querySelector significa que eu tô buscando elementos que estão dentro deste form
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Sempre que eu quiser o valor eu utlizo o .value
        array.push({nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value });
        console.log(array);
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

        //console.log(nome.value, sobrenome, peso, altura);
    }

    // form adiciona um escutador de eventos no meu formulário e por parâmetro coloca qual o evento que vai ser escutado e recebe qualquer função por parâmetro, aí toda vez que que eu aciono o evento essa função é executada.
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
