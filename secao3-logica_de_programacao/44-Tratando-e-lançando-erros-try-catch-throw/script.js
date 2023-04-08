
function soma(y, x) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('x e y precisam ser números.');
    }

    return x + y;
}


// tratar o próprio erro
try{
    console.log(soma(1, 2))
    console.log(soma('1', '2'))
} catch(err){
    console.log(err); // não apresentar no frontEnd
    console.log('Alguma coisa mais amigável pro usuário.');
}