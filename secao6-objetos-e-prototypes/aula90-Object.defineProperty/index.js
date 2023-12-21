function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true,
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        }
    })


}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
