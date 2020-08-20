const koopProviderNemo = require('koop-provider-nemo');

const FULL_EXAMPLE = koopProviderNemo.Model.FULL_EXAMPLE;

function handleRequest(req, res) {
  res.status(200).send(`<p>Welcome to Koop! Example URL:<p>${FULL_EXAMPLE}`);
}

module.exports = handleRequest;
