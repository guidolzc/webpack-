const path = require('path');

module.exports= {
    entry: './js/app.js', // entrada   toma la entrada 
    output: {
        path: path.resolve(__dirname, 'public/js'), // luego lo copila en public y luego va a bundle 
        filename: 'bundle.js'  // es como una caja de codigos
    },              // salida


    mode: 'development', 
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
      
    },

    module:{
        rules: [
            {
                test:/\.js$/,  // busca todos los js
                exclude:/(node_modules)/,  // excluye a los q no quiere buscar
                use: {
                    loader:'babel-loader', // vamos a utilizar babel loader
                    options: {
                        presets: ['@babel/preset-env'] //  // copilara el preset q emos copilado anterior mente 
                    }
                }
            }
        ]
    }
}