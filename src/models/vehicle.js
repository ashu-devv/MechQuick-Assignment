'use strict';
const {
  Model
} = require('sequelize');
const {VehicleType,ServiceType} = require('../Utils/common/enums');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehicle.init({
    UserId: {
      type:DataTypes.STRING,
      allowNull: false
    },
    VehicleType:  {
      type:DataTypes.ENUM,
      values:Object.values(VehicleType),
      allowNull: false
    },
    ServiceType:  {
      type:DataTypes.ENUM,
      values: Object.values(ServiceType),
    },
    bookingDate: {
    type:DataTypes.DATE,
    allowNull:false
  }
}, 
{
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};