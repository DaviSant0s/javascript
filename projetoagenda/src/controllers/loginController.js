const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async function(req, res){
    // instanciando um objeto da classe
    const login = new Login(req.body);

    // Esse médodo vai vaidar os dados

    try {
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