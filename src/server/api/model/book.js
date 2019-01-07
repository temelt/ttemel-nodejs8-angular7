'use strict';

module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { field: "name", type: DataTypes.STRING },
    isbn: { field: "isbn", type: DataTypes.STRING },
    publishDate: { field: "publish_date", type: DataTypes.DATE },
    author_id: { field: "author_id", type: DataTypes.INTEGER },
  }, {});

  Book.associate = function (models) {
    Book.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'author'
    });
  };
  return Book;
};
