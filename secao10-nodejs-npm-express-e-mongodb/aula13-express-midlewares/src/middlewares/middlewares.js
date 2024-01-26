exports.middlewareGlobal = (req, res, next) => {
    
    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('santos', 'Não use santos');
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`)
        console.log();
    }


    next();
}