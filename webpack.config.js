var webpack = require("webpack");
var path = require('path');
var APP_DIR = path.resolve(__dirname,"src");
var OUT_DIR = path.resolve(__dirname,"assets");
module.exports = {
	entry : APP_DIR+ "/index.js",
	output: {
		path:OUT_DIR,
		filename:"bundle.js",
		publicPath:"assets"
	},
    devServer:{
    	inline:true,
    	port:8009
    },




	module:{
		loaders:[
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			 },
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				 loader: "file-loader"
			 },
			 {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    },
		    {
              test :/\.js$/,
              exclude:/(node_modules)/,
              loader:["babel-loader"]
            },
            {
              test:/\.json$/,
              exclude:/(node_modules)/,
              loader:"json-loader"
            },
            {
              test:/\.css$/,
              loader: "style-loader!css-loader!autoprefixer-loader!group-css-media-queries-loader"
            },

             {
              test:/\.scss$/,
              loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }


		]
	}
}
