module.exports = app => ({
  middleware: [
    'koa-body',
    'koa-json',
  ],
  plugin: [
    '@kukumoon/logger',
    '@kukumoon/sequelize',
    '@kukumoon/apollo-server'
  ],
});
