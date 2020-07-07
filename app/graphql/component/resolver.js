const formatDatetime = require('../../lib/format-datetime');

module.exports = {
  Component: {
    createdAt(_, args, ctx) {
      return formatDatetime(_.createdAt);
    },
    updatedAt(_, args, ctx) {
      return formatDatetime(_.updatedAt);
    },
  },
  Query: {
    components(_, args, ctx) {
      return ctx.connector.component.getAllComponents(ctx);
    }
  }
}