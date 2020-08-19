module.exports = {
  apps: [
    {
      name: 'koop',
      script: 'src/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'deploy',
      host: ['koop.getnemo.org'],
      ref: 'origin/main',
      repo: 'git@github.com:cooperka/nemo-koop.git',
      path: '/home/deploy/nemo-koop',
      'post-deploy': 'yarn install; yarn run serve',
    },
  },
};
