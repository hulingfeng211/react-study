module.exports = {
    entry: './public/js/index.jsx',
    output: {
        path:'./public/js/',
        filename: 'bundle.js' //this is the default name, so you can skip it
    
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
                test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            },
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}