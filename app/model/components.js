/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('components', {
    componentId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    component: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    previewSize: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'small'
    },
    previewImage: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    orderIndex: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    configItem: {
      type: DataTypes.JSON,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createTime'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updateTime'
    }
  }, {
    tableName: 'components'
  });
};
