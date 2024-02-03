const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logado');
    res.render('login');
}

exports.register = async function(req, res){
    
    try {
        // instanciando um objeto da classe
        const login = new Login(req.body);

        // Esse médodo vai vaidar os dados
        await login.register();

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('/login/index');
            });

            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso!');
        req.session.save(function(){
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e)
        return res.render('404');
    }
    
}

exports.login = async function(req, res){
    
    try {
        // instanciando um objeto da classe
        const login = new Login(req.body);

        // Esse médodo vai validar os dados
        await login.login ();

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('/login/index');
            });

            return;
        }

        req.flash('success', 'Logado com sucesso!');
        req.session.user = login.user;
        
        req.session.save(function(){
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e)
        return res.render('404');
    }
    
}

exports.logout = function(req, res){
    req.session.destroy();
    res.redirect('/');
}