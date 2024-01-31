exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    // checando se tem algum erro de csrf
    if (err && err.code === 'EBADCSRFTOKEN'){
        // você pode renderizar uma página 404 aqui
        return res.render('404');
    }
}

// esse eu quero passar pra próxima função
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}