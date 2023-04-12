# Koop for NEMO

Created using the [Koop CLI](https://github.com/koopjs/koop-cli) template. See the
[specification](https://koopjs.github.io/docs/usage/koop-core) for more details.

## Production

### Provision a brand new server

Locally (not on the server):

1. Edit the host in `ecosystem.config.js` if needed
1. Set up your DNS to point to the new server
1. Run `yarn run provision`
1. Run `yarn run deploy`

On the server...

In the app directory (`current/`):

1. Run `yarn run pm2 startup`, and copy the command it outputs

As root:

1. Paste the command copied above
1. Set up nginx or some other software to serve the website (see
   [NEMO's prod setup guide](https://github.com/thecartercenter/nemo/blob/main/docs/production-setup.md)
   for an example)

In the app directory (`current/`):

1. `yarn run serve`
1. `yarn run pm2 save` to commit the app to start automatically on server reboot

### Deploy regular updates

Locally (not on the server):

1. Push any new commits
1. Run `yarn run deploy`

### Monitoring

In the server app directory (`current/`):

1. `yarn run pm2 status` to check if what's running

## Development

Tip: When developing locally, link the Provider so you don't need to keep reinstalling it:

```shell script
cd koop-provider-nemo
yarn link
cd ../nemo-koop
yarn link koop-provider-nemo
```

### Dev Server

This project uses the [Koop CLI](https://github.com/koopjs/koop-cli) to set up the dev server:

```
yarn start
```

The server will be running at `http://localhost:8080` or at the port specified at the configuration.

For more details, check the
[Koop CLI documentation](https://github.com/koopjs/koop-cli/blob/master/README.md).
