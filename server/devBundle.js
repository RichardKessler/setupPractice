import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotmiddleware from 'webpack-hot-middleware'
import webpackConfig from './../webpack.config.client.js'

const compile = (app) => {
    if (process.env.NODE_ENV == "development"){
        const compiler = webpack(webpackConfig)
        const middleware = webpackMiddleware(compile, {
            publicPath: webpackConfig.output.publicPath
        })
        app.use(middleware)
        app.use(webpackHotmiddleware(compiler))
    }
}

export default {
    compile
}