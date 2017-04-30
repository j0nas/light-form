const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    //noInfo: true,
    publicPath: config.output.publicPath
});
app.use(devMiddleware);

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) =>
    //res.send(200));
    //res.send(devMiddleware.fileSystem.readFileSync(path.join(__dirname, 'dist', 'index.html'))));
    res.send(path.join(__dirname, 'dist', 'index.html')));

app.listen(3000, 'localhost', err => {
    if (err) throw new Error(err);
    console.log('Listening at http://localhost:3000');
});