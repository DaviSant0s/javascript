const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action='/' method='POST'>
            Cliente: <input type='text' name='alterou aqui ó' />
            <button>Enviar caraio</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.query)
    res.send(req.query);
})


app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Recebi o formulário!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});