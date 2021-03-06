const path= require("path");

module.exports={
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "exes"),
        filename: "bundle.js"
    },
    module:{
        rules: [
            { 
                test: /\.js$/,  
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    mode: "development"
}