const path = require('path');

module.exports = app => ({
  client: {
    name: '@',
    username: '@',
    password: '@',
    modelDir: path.resolve(app.root, 'app', 'model'),
    options: {
      host: '@',
      port: 3306,
    },
  },
  // useCLS: true,
});
