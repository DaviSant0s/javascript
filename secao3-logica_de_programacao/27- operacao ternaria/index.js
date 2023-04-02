const pontuacaoUSuario = 999;

/* if(pontuacaoUSuario >= 1000){
    console.log("Usuario VIP");
}else{
    console.log("Usuario normal");
} */

const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);