const form = document.querySelector('.form');
const resultado = document.querySelector('#resultado');

function calculoImc(evento){
    evento.preventDefault();

    const peso = Number(form.querySelector('#peso').value);
    const altura = Number(form.querySelector('#altura').value);

    resultado.classList.remove('resultado', 'invalido');

    if(peso === 0){
        resultado.innerHTML = 'Peso inválido!';
        resultado.classList.add('invalido');
    
    } else if(altura === 0){
        resultado.innerHTML = 'Altura inválida!';
        resultado.classList.add('invalido');

    } else{
        resultado.classList.add('resultado');

        const imc = (peso / (altura ** 2)).toFixed(2);

        if(imc < 18.5){
            resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;

        } else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`;

        } else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;

        } else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade de grau 1)`;

        } else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade de grau 2)`;

        } else {
            resultado.innerHTML = `Seu IMC é ${imc} (Obesidade de grau 3)`;
        }


        
    }

    resultado.classList.remove('escondido');
}

form.addEventListener('submit', calculoImc);


