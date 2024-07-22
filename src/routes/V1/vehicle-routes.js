const express = require('express');

const {vehicleController} = require('../../controllers');
const {vehicleMiddleware} = require('../../middlewares');

const router = express.Router();

// /api/v1/vehicles POST
router
    .post('/', 
    vehicleMiddleware.validateCreateRequest,
    vehicleController.createVehicle);

// /api/v1/vehicles GET
router
    .get('/', 
        vehicleController.getVehicles);

// /api/v1/vehicles/:UserId GET
router
    .get('/:UserId', 
        vehicleController.getVehicle);

// /api/v1/vehicles/:UserId DELETE
router
    .delete('/:UserId', 
        vehicleController.destroyVehicle);

// /api/v1/vehicles/:UserId PATCH
router
    .patch('/:UserId', 
        vehicleController.updateVehicle);



module.exports = router; 