module.exports = {
  router: '/configuration-studio-management/api/graphql', // GraphQL路由
  introspection: true,
  graphiql: true, // 是否开启GraphIQL
  before: async ctx => {

  },
  after: async ctx => {

  },
  middlewareOptions: {
    cors: true
  },
};
