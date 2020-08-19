const koopOutputGeoJson = require("koop-output-geojson");
const koopProviderNemo = require('koop-provider-nemo');

const outputs = [{
  instance: koopOutputGeoJson
}];

const auths = [];

const caches = [];

const plugins = [{
  instance: koopProviderNemo
}];

module.exports = [...outputs, ...auths, ...caches, ...plugins];
