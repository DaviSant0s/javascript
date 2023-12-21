function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaCliques = e => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.delete();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        })
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
           if (e.key !== 'Enter'){
                
            } else{
                this.realizaConta();
            }
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        
        try{
            let conta = this.display.value;

            if (!conta){
                alert('Conta inválida');
                return;
            }

            conta = eval(conta);

            this.display.value = String(conta);

        } catch (e){
            alert('Conta inválida');
            return;
        }
    };
    
}

const calculadora = new Calculadora();
calculadora.inicia();