const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class post extends Model {}

post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: "user",
            key: "id",
          },
      },
      

      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
  module.exports = post;