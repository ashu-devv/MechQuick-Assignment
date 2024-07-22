'use strict';
/** @type {import('sequelize-cli').Migration} */
const {VehicleType,ServiceType} = require('../Utils/common/enums');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type:Sequelize.STRING,
        allowNull: false
      },
      VehicleType: {
        type: Sequelize.ENUM,
        values:Object.values(VehicleType),
        allowNull: false
      },
      ServiceType: {
        type:Sequelize.ENUM,
        values: Object.values(ServiceType),
        allowNull: false
      },
      bookingDate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};