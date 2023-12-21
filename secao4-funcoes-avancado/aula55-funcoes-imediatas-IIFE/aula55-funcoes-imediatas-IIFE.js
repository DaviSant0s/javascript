(function(idade, peso, altura){
    const sobrenome = 'Santos';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Davi'));
    }

    falaNome();
})(30, 80, 1.80);