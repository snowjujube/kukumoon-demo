const {Service} = require('@kukumoon/kukumoon-core');

class ComponentService extends Service{
  constructor(options) {
    super(options);
    this.sequelize = this.ctx.sequelize;
    this.Components = this.ctx.model.Components;
  }

  // 获取全部组件
  async getAll() {
    // 使用sequelize ORM 查询
    return this.Components
      .all()
      // make object to array
      .map(el => el.get({ plain: true }))
  }
}

module.exports = ComponentService;