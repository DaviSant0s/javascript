exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    // checando se tem algum erro
    if (err) res.render('404');

    next();
}

// esse eu quero passar pra próxima função
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}