const {StatusCodes} = require('http-status-codes');

const AppError = require('../Utils/errors/app-error');
const {VehicleRepository} = require('../repositories/vehicle-repository');

const vehicleRepository = new vehicleRepository();

async function createVehicle(data){
    try {
        const vehicle = await vehicleRepository.create(data);
        return vehicle;
    } catch (error) {
        if (error.name =='SequelizeValidationError'){
            let explanation =[];
            error.errors.forEach((err)=>{
                explanation.push(err.message)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new vehicle object',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }

}

async function getVehicles(){
    try {
        const vehicles = await vehicleRepository.getAll();
        return vehicles;
    } catch (error) {
        throw new AppError('Cannot fetch data of all vehicles',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function getVehicle(id){
    try {
        const vehicle = await vehicleRepository.get(id);
        return vehicle;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The vehicle you requested is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of vehicle',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function destroyVehicle(id){
    try {
        const response = await vehicleRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The vehicle you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of the vehicle',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }

}

async function updateVehicle(id){
    try {
        const response = await vehicleRepository.update(id);
        return response;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Vehicle you requested to update is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of vehicle',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }

}

module.exports ={
    createVehicle,
    getVehicle,
    getVehicles,
    destroyVehicle,
    updateVehicle
}