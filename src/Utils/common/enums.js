const VehicleType = {
    // Standard Cars
    SEDAN: 'sedan',
    HATCHBACK: 'hatchback',
    SUV: 'suv',
    COUPE: 'coupe',
    CONVERTIBLE: 'convertible',
    STATION_WAGON: 'station-wagon',

    // Specialized Vehicles
    MINIVAN: 'minivan',
    PICKUP_TRUCK: 'pickup-truck',
    MOTORCYCLE: 'motorcycle',
    BICYCLE: 'bicycle',

    // Commercial Vehicles
    VAN: 'van',
    BUS: 'bus',
    TRUCK: 'truck',

    // Luxury Vehicles
    LIMOUSINE: 'limousine',
    LUXURY_SEDAN: 'luxury-sedan',

    // Eco-Friendly Vehicles
    ELECTRIC_CAR: 'electric-car',
    HYBRID_CAR: 'hybrid-car',

    // Utility Vehicles
    AMBULANCE: 'ambulance',
    FIRE_TRUCK: 'fire-truck',
    POLICE_CAR: 'police-car',
    TOW_TRUCK: 'tow-truck',

    // Leisure and Specialty Vehicles
    TOUR_BUS: 'tour-bus',
    PARTY_BUS: 'party-bus'
};

const ServiceType = {
    // Standard Rides
    ECONOMY: 'economy',
    COMPACT: 'compact',
    MID_SIZE: 'mid-size',
    FULL_SIZE: 'full-size',
    LUXURY: 'luxury',

    // Shared Rides
    RIDE_SHARE: 'ride-share',
    CARPOOL: 'carpool',

    // Specialized Rides
    AIRPORT_TRANSFER: 'airport-transfer',
    PET_FRIENDLY: 'pet-friendly',
    ACCESSIBLE: 'accessible',

    // Premium Rides
    BUSINESS: 'business',
    VIP: 'vip',
    EXECUTIVE: 'executive',

    // Long-Distance and Outstation Rides
    INTERCITY: 'intercity',
    OUTSTATION: 'outstation',

    // Rental Services
    SELF_DRIVE: 'self-drive',
    WITH_DRIVER: 'with-driver',

    // Commercial and Utility Services
    DELIVERY: 'delivery',
    MOVING: 'moving',
    FREIGHT: 'freight',
    COURIER: 'courier',

    // Emergency Services
    AMBULANCE: 'ambulance',
    TOW_TRUCK: 'tow-truck',

    // Leisure and Specialty Vehicles
    TOUR: 'tour',
    PARTY_BUS: 'party-bus',
    LIMOUSINE: 'limousine',

    // Eco-Friendly Options
    ELECTRIC: 'electric',
    HYBRID: 'hybrid'
};


module.exports = {
    VehicleType,
    ServiceType
}