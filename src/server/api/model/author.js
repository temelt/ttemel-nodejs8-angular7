'use strict';

module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    firstName: { field: "first_name", type: DataTypes.STRING },
    lastName: { field: "last_name", type: DataTypes.STRING },
  }, {tableName:"author"});
  return Author;
};
