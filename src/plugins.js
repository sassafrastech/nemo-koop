const koopProviderNemo = require('koop-provider-nemo');
const outputs = [];
const auths = [];
const caches = [];
const plugins = [{
  instance: koopProviderNemo
}];
module.exports = [...outputs, ...auths, ...caches, ...plugins];