const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    for (let j of numeros){

        console.log(numero);
        if (numero === 7){
            break;
        }
        
    }
   
}