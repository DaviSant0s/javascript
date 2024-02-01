exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
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