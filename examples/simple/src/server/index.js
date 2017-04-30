const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const webpackConfig = require('../client/config/dev.webpack.config.js');
const buildPath = path.resolve(__dirname, "..", "client", "build");
const generatedIndexHtmlPath = path.resolve(buildPath, 'index.html');
const devMiddlewareConfig = {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    children: false,
    reasons: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false
  }
};

const compiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(compiler, devMiddlewareConfig);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(historyApiFallback());
app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) =>
  res.send(devMiddleware.fileSystem.readFileSync(generatedIndexHtmlPath)));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port :" + port));
