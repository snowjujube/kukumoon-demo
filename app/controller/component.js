const { Controller } = require('@kukumoon/kukumoon-core');

// REST API 实现
class ComponentController extends Controller {
  // 获取所有组件
  async getAllComponents(ctx) {
    // 调用service
    let components = await ctx.service.component.getAll();
    ctx.body  = {
      data: components
    }
  }
}

module.exports = ComponentController;