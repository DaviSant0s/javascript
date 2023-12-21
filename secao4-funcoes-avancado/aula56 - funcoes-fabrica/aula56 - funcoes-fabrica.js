function criaPessoa(nome, sobrenome, a, p){
        return {
            nome,
            sobrenome, 
            peso: p,
            altura: a,

            // getter
            get nomeCompleto(){
                return `${this.nome} ${this.sobrenome}`;
            },

            //setter
            set nomeCompleto(valor){
                valor = valor.split(' ');
                // Retorna o primeiro valor do array e ele vai remover esse valor do array
                this.nome = valor.shift();
                // Pegar co restante que ta no array, juntar isso numa string e separa por um espaço
                this.sobrenome = valor.join(' ');
            },

            fala(assunto){
                return `${this.peso} está falando ${assunto}`;
            },

            // getter
            get imc(){
                const indice = this.peso / (this.altura ** 2);
                return indice.toFixed(2);
            },

        }
}

const p1 = criaPessoa('Davi', 'Santos', 1.74, 64);
p1.nomeCompleto = 'maria joaquina miranda';
console.log(p1.nomeCompleto);