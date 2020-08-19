# Koop for NEMO

Created using the [Koop CLI](https://github.com/koopjs/koop-cli) template.
See the [specification](https://koopjs.github.io/docs/usage/koop-core) for more details.

## Production

Push your commits, then `yarn run deploy`.

## Development

### Testing

This project uses [mocah](https://www.npmjs.com/package/mocha) as the testing framework and [chaijs](https://www.chaijs.com/) as the assertion library. All test files in the `test` directory should have the special extension `.test.js`, which will be executed by the command:

```
$ npm test
```

### Dev Server

This project by default uses the [Koop CLI](https://github.com/koopjs/koop-cli) to set up the dev server. It can be invoded via

```
$ npm start
```

The server will be running at `http://localhost:8080` or at the port specified at the configuration.

Type `rs` + <kbd>Enter</kbd> to restart the active server.

For more details, check the [Koop CLI documentation](https://github.com/koopjs/koop-cli/blob/master/README.md).
