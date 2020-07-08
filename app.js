module.exports = {
  // eslint-disable-next-line no-unused-vars
  async beforeStart(app) {
  //  before start hooks
    app.coreLogger.info('kukumoon服务即将启动');
  },
  // eslint-disable-next-line no-unused-vars
  async afterStart(app) {
  //  started hooks
    app.coreLogger.info(`服务地址：http://localhost:${ process.env.PORT || 3030 }`)
    app.coreLogger.info(`graphiql IDE地址：http://localhost:${ process.env.PORT || 3030 }${app.graphql.apolloServer.graphqlPath}`)
  },
};
