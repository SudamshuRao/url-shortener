'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    static associate(models) {}
  }

  Url.init({
    longUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shortCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Url',
  });

  return Url;
};
