'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User)
    }
  }
  Todo.init({
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Todo name is required!" },
        notEmpty: { msg: "Todo name is required!" },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Status is required!" },
        notEmpty: { msg: "Status is required!" },
      },
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};