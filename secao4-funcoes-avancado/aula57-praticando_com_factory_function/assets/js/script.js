function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes(){
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;
                console.log(el);
                
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            
            try{
                conta = eval(conta);
                
                if(!conta){
                    alert('Conta inválida!');
                    return;
                }
    
                this.display.value = String(conta);

            } catch(e){
                alert('Conta inválida!');
                return;
            }
        },

       pressionaEnter(){
            this.display.addEventListener('keydown', (e) => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        }



    }
}

const calculadora = criaCalculadora();
calculadora.inicia();