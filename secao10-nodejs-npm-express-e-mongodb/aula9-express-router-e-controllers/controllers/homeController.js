exports.paginaInicial = (req, res) => {
    res.send(`
        <form action='/' method='POST'>
            Cliente: <input type='text' name='alterou aqui ó' />
            <button>Enviar caraio</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Recebi o formulário!')
    
}