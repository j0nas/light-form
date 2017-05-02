const path = require('path');

const applicationFolder = path.resolve(__dirname, '..', '..', 'client', 'Application');
const srcDir = path.resolve(__dirname, '..', '..');

module.exports = {
  buildPath: path.join(__dirname, '..', '..', '..', 'public'),
  entry: path.join(applicationFolder, 'index.jsx'),
  src: srcDir,
  publicAssets: path.join(srcDir, 'client', 'public'),
  htmlPluginTemplate: path.join(applicationFolder, 'index.html'),
  favIcon: path.join(applicationFolder, 'favicon.ico'),
};
