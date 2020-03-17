const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//while the cross-env module is used to set process env variables ragerdless of the OS
// used in package.json in the test scripts as cross-env ENV_KEY=ENV_VALUE
process.env.NODE_ENV = process.env.NODE_ENV || 'development'  // set to test when running test, set to production on heroku, set to development by default

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({ path: '.env.test'}) // dotenv takes our enviroments variables defined in the file and saves in the process enviroment variables
} else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path: '.env.development'})
}

// Instead of exporting an object we exported an function so we could use the env set to production
module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{ 
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({ 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        // the plugins array is where i can setup all the plugins that should have access to change and work on my existing webpack build
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'FIREBASE_DATABASE_URL': JSON.stringify(process.env._DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', // the is production variable is used to bundle our js
        // file for either production or development
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}