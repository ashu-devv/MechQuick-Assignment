const CrudRepository = require('./crud-repository');
const {Vehicle} = require('../models')

class VehicleRepository extends CrudRepository{
    constructor(){
        super(Vehicle);
    }
}

module.exports = VehicleRepository;