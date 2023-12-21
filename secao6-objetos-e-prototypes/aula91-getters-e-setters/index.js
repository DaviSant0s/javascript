function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            if (typeof valor != 'numer'){
                console.log('Bad Value');
                return;
            }
            nome = valor
        } 
    };
}

const p1 = criaProduto('Camiseta');
p1.nome = 'Qualquer Coisa';
console.log(p1.nome);
