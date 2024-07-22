const express = require('express');
const router = express.Router();
const {InfoController} = require('../../controllers');
const vehicleRoutes = require('./vehicle-routes');

router.get('/info',InfoController.info);
router.use('/vehicles',vehicleRoutes);
module.exports = router;