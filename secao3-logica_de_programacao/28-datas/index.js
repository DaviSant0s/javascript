function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`; 

}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;    
}   

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


function diaDaSemana(dia) {
    switch (dia) {
      case 1:
        return "Hoje é segunda-feira";
      case 2:
        return "Hoje é terça-feira";
      case 3:
        return "Hoje é quarta-feira";
      case 4:
        return "Hoje é quinta-feira";
      case 5:
        return "Hoje é sexta-feira";
      case 6:
        return "Hoje é sábado";
      case 7:
        return "Hoje é domingo";
      default:
        return "Dia inválido";
    }
  }
  
  console.log(diaDaSemana(3)); // Saída: "Hoje é quarta-feira"
  console.log(diaDaSemana(8)); // Saída: "Dia inválido"