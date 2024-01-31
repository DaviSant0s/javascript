// Arquivo que guarda nossos dados confidenciais
require('dotenv').config();

// Express
const express = require('express');
const app = express();

// mongoose - vai modelar a nossa base de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING) 
    .then(() => { 
        app.emit('pronto')
    })
    .catch((e) => console.log(e));

// Sessões é pra identificar o navegador de um cliente através do cookie
const session = require('express-session');

// MongoStore é pra falar que as seções vão ser salvas dentro da base de dados, pois por padrão elas são salvas em memória
const MongoStore = require('connect-mongo');

// Esse são flash mensages, são mesagens de aviso/erro temporárias, auto destrutivas. Assim que você ler ela, ela vai sumir da base de dados.
// E elas precisam estar depois de importar a session, pois elas são salvas na sessão.
const flash = require('connect-flash');

// São as rotas da nossa aplicação
const routes = require('./routes');

// pra trabalhar com caminhos
const path = require('path');

// É uma recomendação do próprio pessoal do express, então não vamos entrar muito em detalhes.
// Você pode olhar na documentação tudo o que ele faz pra deixar nossa aplicação mais segura
const helmet = require('helmet');

// São csrfTokens que a gente cria para os nossos formulários, então todos os nosso formulários tem que ter esse csrfToken
// Isso faz com que nenhum site externo consiga postar coisas para dentro da nossa aplicação, olhe a documentação.
const csrf = require('csurf');

// São os nossos middlewares, e o express confia muito em middlewares. Elas são funções que são executadas na rota, uma cadeia de coisas.
// Você pode cria funções/middlewares no meio do caminho, ou seja,  antes, no meio ou depos de responder o cliente.
// E uma função chama a outra. Exemplo: Um usuário não logado não passaria da função que antes de entregar a resposta para o cliente, pois nessa função vai ter uma verificação.
const { middlewareGlobal, checkCsrfError,csrfMiddleware } = require('./src/middlewares/middlewares')

// Estamos utilizando o helmet
app.use(helmet());

// Isso permite com que a gente consiga postar formulário pra dentro da nossa aplicação
app.use(express.urlencoded({ extended: true }));

// Ele também é muito utilizado
app.use(express.json());

// Arquivos estáticos são todos os arquivos que são estáticos na nossa aplicação  e que podem ser acessadas diretamente, img, css, js
// Todo que estiver dentro da pasta public a gente vai poder acessar diretamente
// A gente acessa o arquivo de bandle.js diretamente, por exemplo.
app.use(express.static(path.resolve(__dirname, 'public')));


// Configurações de sessão
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

// views são arquivos que a gente renderiza na tela, e aqui tá o caminho deles
app.set('views', path.resolve(__dirname, 'src', 'views'))

// Aqui é a engine que a gente tá utilizando para redenrizar o html, tem várias
// Utilizamos a engine ejs, pois é muito similar ao html
app.set('view engine', 'ejs');

// estamos configurando os csrfTokens
app.use(csrf());

// nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Estamos chamando as rotas
app.use(routes);

// Estamos mandando a nossa aplicação a escutar as portas
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});

