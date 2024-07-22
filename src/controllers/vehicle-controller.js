const { StatusCodes } = require('http-status-codes');
const {VehicleService } = require('../services');
const { response } = require('express');
const { error } = require('winston');

const { SuccessResponse, ErrorResponse } = require('../Utils/common');


/**
 * POST: /vehicles/
 * req-body {As Required}
 */
async function createVehicle(req, res) {
    try {
        const vehicle = await VehicleService.createVehicle({
            UserId: req.body.UserId,
            VehicleType: req.body.VehicleType,
            ServiceType: req.body.ServiceType,
            bookingDate: req.body.bookingDate

        });
        SuccessResponse.data = vehicle;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);


    }

}

/**
 * 
 * GET : /vehicles/
 * req-body {}
 */

async function getVehicles(req, res) {
    try {
        const vehicles = await VehicleService.getVehicles();
        SuccessResponse.data = vehicles;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);

    }
}

/**
 * 
 * GET : /vehicles/:UserId
 * req-body {}
 */

async function getVehicle(req, res) {
    try {
        const vehicle = await VehicleService.getVehicle(req.params.UserId);
        SuccessResponse.data = vehicle;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);

    }
}

/**
 * 
 * DELETE : /vehicles/:UserId
 * req-body {}
 */

async function destroyVehicle(req, res) {
    try {
        const vehicle = await VehicleService.destroyVehicle(req.params.UserId);
        SuccessResponse.data = vehicle;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);

    }
}

/**
 * 
 * PATCH : /vehicles/:UserId
 * req-body {As Required}
 */

async function updateVehicle(req, res) {
    try {
        const vehicle = await VehicleService.updateVehicle(req.params.UserId);
        SuccessResponse.data = vehicle;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);

    }
}

module.exports = {
    createVehicle,
    getVehicle,
    getVehicles,
    destroyVehicle,
    updateVehicle
}
