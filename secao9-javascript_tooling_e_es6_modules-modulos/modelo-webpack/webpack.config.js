const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js', // arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // não precisa colocar as barras
        filename: 'bundle.js', //podemos dar o nome que a gente quiser mas normalmente é esse
    }, 
    module: {
        rules: [
            {
            // impede que o webpack leia a pasta nodemodules
            exclude: /node_modules/, 

            // testa qual vai ser o arquivo que você vai ler/analizar e depois formar o bandle
            test: /\.js$/, 

            // o que ele vai usar
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }


            }, 
            {
                test: /\.css/, // para testar se é css msm
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // faz o mapeamento o local quando ocorrer algum erro por exemplo, no arquivo original e não no bundle
    devtool: 'source-map'
};