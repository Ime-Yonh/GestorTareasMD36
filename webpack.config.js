const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de la aplicacion
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, //Regex para identificar archivos JavaScript
                exclude: /node_modules/, //Excluir archivos de node_modules
                use: {
                    loader: 'babel-loader', //Loader para llevar JS moderno a  JS antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'], //Presets 
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde el cual el servidor agarara los archivos
        compress: true,//Habilitar la compresion gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};