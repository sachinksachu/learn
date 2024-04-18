const path = require("path");

module.exports = {
    entry : path.resolve(__dirname, "src", "index.js"),
    output : {
        path : path.resolve(__dirname,"build"),
        filename: "bundle.js"
    },
    module : {
        rules:[
            {
                test: /\.(js|jsx)$/, //matches .js, .ts, .jsx and .tsx files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                      presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                  },
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.css$/, //matches .css files only
                use: ['style-loader', 'css-loader'] // 'css-loader' process the file first then the 'style-loader' will work on the output by 'class-loader'
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                  },
                ],
              },
        ]
    },
    mode: "production"
}