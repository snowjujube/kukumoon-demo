const { SyntaxError, ValidationError } = require('apollo-server-errors');
const { GraphQLError } = require('graphql');

module.exports = {
  introspection: true,
  graphiql: false, // 生产环境不开启
  options: {
    formatError: (error)=> {
      // prod 环境，拦截一些GraphQL错误返回
      if (error instanceof SyntaxError || error instanceof ValidationError) {
        return new GraphQLError('服务器开小差了，请稍后重试～');
      }
      // Otherwise return the original error.  The error can also
      // be manipulated in other ways, so long as it's returned.
      return error;
    },
    introspection: true,
    debug: false,
  },
};
