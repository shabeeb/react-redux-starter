const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware =  require('webpack-dev-middleware');
const webpackHotMiddleware =  require('webpack-hot-middleware');
const devConfig =  require('./webpack.config.js');

const port = (process.env.PORT || 8080);
const isDeveloping = (process.env.NODE_ENV && process.env.NODE_ENV === 'development');
const app = express();

if (isDeveloping) {
    const compiler = webpack(devConfig);
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: devConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        quiet: false,
        noInfo: false,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.use(express.static('./src/public'));
    // https.createServer(options, app).listen(8443);

} else {
    app.use(express.static(path.resolve(__dirname, '../buid')));
}

app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(port)
console.log(`Listening at http://localhost:${port}`)

