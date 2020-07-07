const {ContextBuiltin} = require('@kukumoon/kukumoon-core');

class ComponentConnector extends ContextBuiltin{
  // 获取所有组件
  async getAllComponents(ctx) {
    return await ctx.service.component.getAll();
  }
}

module.exports = ComponentConnector;