const koopOutputGeoJson = require('koop-output-geojson');
const koopProviderNemo = require('koop-provider-nemo');

const outputs = [
  {
    instance: koopOutputGeoJson,
  },
];

const auths = [];

const caches = [];

const plugins = [
  {
    instance: koopProviderNemo,
    options: {
      before: (request, callback) => {
        const { method, url } = request;
        // Log incoming requests for diagnostics.
        console.debug(`-> ${method} ${url}`);
        callback();
      },
      after: (request, geojson, callback) => {
        // We can post-process here if needed.
        callback(null, geojson);
      },
    },
  },
];

module.exports = [...outputs, ...auths, ...caches, ...plugins];
