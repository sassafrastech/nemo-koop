# Koop for NEMO

Created using the [Koop CLI](https://github.com/koopjs/koop-cli) template. See the
[specification](https://koopjs.github.io/docs/usage/koop-core) for more details.

## Production

Provision a brand new server:

1. Run `yarn run provision` locally (not on the server)
1. Set up nginx or some other software to serve the website (see
   [NEMO's prod setup guide](https://github.com/thecartercenter/nemo/blob/main/docs/production-setup.md)
   for an example)

Deploy regular updates:

1. Push any new commits
1. Run `yarn run deploy` locally (not on the server)

## Development

When developing locally, link the Provider so you don't need to keep reinstalling it:

```shell script
cd koop-provider-nemo
yarn link
cd ../nemo-koop
yarn link koop-provider-nemo
```

### Testing

This project uses [mocah](https://www.npmjs.com/package/mocha) as the testing framework and
[chaijs](https://www.chaijs.com/) as the assertion library. All test files in the `test` directory
should have the special extension `.test.js`, which will be executed by the command:

```
$ npm test
```

### Dev Server

This project by default uses the [Koop CLI](https://github.com/koopjs/koop-cli) to set up the dev
server. It can be invoded via

```
$ npm start
```

The server will be running at `http://localhost:8080` or at the port specified at the configuration.

Type `rs` + <kbd>Enter</kbd> to restart the active server.

For more details, check the
[Koop CLI documentation](https://github.com/koopjs/koop-cli/blob/master/README.md).
