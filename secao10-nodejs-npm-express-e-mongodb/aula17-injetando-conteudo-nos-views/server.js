require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING) 
    .then(() => { 
        app.emit('pronto')
    })
    .catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');



const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    // Pode ser o que você quiser, conntando que ninguém saiba
    secret: 'qpwjicasc ;lxk|^X/JQ  QKCNASCACAãxpáxpa',

    // process.env.CONNECTIONSTRING é a sua URL de conexão do MongoDB.
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),

    // Configurações recomendadas pela documentação
    resave: false,
    saveUninitialized: false,

    // Quanto tempo a sessão/cookie vai durar
    cookie: {
        // Quanto tempo em milésimos de segundos esse cookie vai durar
        // 7 dias em milésimos de segundos
        maxAge: 1000 * 60 * 60 * 24 * 7,

        httpOnly: true,

    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

// nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
