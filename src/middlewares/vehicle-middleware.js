const {StatusCodes} = require('http-status-codes');

const {SuccessResponse,ErrorResponse} = require('../Utils/common');
const AppError = require('../Utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if (!req.body.UserId){
        ErrorResponse.message = 'Something went wrong while creating a vehicle';
        ErrorResponse.error = new AppError(['UserId not found in the incoming request in the correct form'])
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
        
    }
    if (!req.body.VehicleType){
        ErrorResponse.message = 'Something went wrong while creating a vehicle';
        ErrorResponse.error = new AppError(['VehicleType not found in the incoming request in the correct form'])
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
        
    }
    if (!req.body.ServiceType){
        ErrorResponse.message = 'Something went wrong while creating a vehicle';
        ErrorResponse.error = new AppError(['ServiceType not found in the incoming request in the correct form'])
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
        
    }
    if (!req.body.bookingDate){
        ErrorResponse.message = 'Something went wrong while creating a vehicle';
        ErrorResponse.error = new AppError(['bookingDate not found in the incoming request in the correct form'])
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
        
    }
    next();
}

module.exports = {
    validateCreateRequest
}