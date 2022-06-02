const path=require('path')
const { merge } = require('webpack-merge');
const baseConfig=require('./webpack.base.js')
const webpackNodeExternals=require('webpack-node-externals')
const config={
    mode:'none',
    target:'node',
    entry: './src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    externals:[webpackNodeExternals()]
    // ,
    // module:{
    //     rules:[
    //         {
    //             test:/\.js?$/,
    //             loader:'babel-loader',
    //             exclude:/node_modules/,
    //             options:{
    //                 "presets": [
    //                     "@babel/preset-env", "@babel/preset-react"
    //                   ],
                      
    //             }
    //         }
    //     ]
    // }
}

module.exports=merge(baseConfig,config)

