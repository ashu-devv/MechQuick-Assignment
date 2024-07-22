# Vehicle Booking Service

## Overview

The Vehicle Booking Service is a web application that allows users to book various types of vehicles for different services. It includes functionality for creating, retrieving, updating, and deleting vehicle bookings. The service supports multiple vehicle types and service types.

## Project Structure

The project structure is organized as follows:

- **`src/`**: Contains core application files:
  - **Routes**: Define API endpoints and route handling.
  - **Migrations**: Define and manage database schema changes.
  - **Seeders**: Populate the database with initial data.
  - **Controllers**: Handle incoming requests and responses.
  - **Services**: Contain business logic and interact with the repository.
  - **Repositories**: Manage data access and interactions with the database.
  - **Models**: Define the database schema and associations.
  - **Middlewares**: Validate and process requests before they reach the controllers.
  - **Utils**: Contain common utility functions and error handling.
  - **Config**: Configuration files for server, database, and logging.

- **`server.js`**: Entry point of the application, located outside the `src` folder. Initializes and starts the server.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- MySQL (or another SQL-compatible database)

### Installation

1. **Clone the Repository:**
   ```
   git clone https://github.com/ashu-devv/MechQuick-Assignment.git
   ```


2. **Navigate to the Project Directory:**
   ```
   cd MechQuick-Assignment
   ```

3.  **Install Dependencies:**
   ```
   npm install
   ```

4. **Configure the Database:**
   Create a configuration file src/config/config.json with the following structure:
   ```
   npx sequelize init
   ```

5. **Create the Database:**
  Run the following command to create the database:
    ```
    npm run db:create
    ```

    
6.**Run the Application:**
Start the application by running:
   ```
    npm run dev
   ```
    

## Database Schema

### Vehicle Model

The Vehicle model includes the following fields:

| Field        | Description                                                                                                       | Type  | Required | Values                                                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------------------|-------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| `UserId`     | The ID of the user who booked the vehicle.                                                                        | STRING| Yes      | -                                                                                                                                |
| `VehicleType`| The type of the vehicle.                                                                                           | ENUM  | Yes      | `SEDAN`, `HATCHBACK`, `SUV`, `COUPE`, `CONVERTIBLE`, `STATION_WAGON`, `MINIVAN`, `PICKUP_TRUCK`, `MOTORCYCLE`, `BICYCLE`, `VAN`, `BUS`, `TRUCK`, `LIMOUSINE`, `LUXURY_SEDAN`, `ELECTRIC_CAR`, `HYBRID_CAR`, `AMBULANCE`, `FIRE_TRUCK`, `POLICE_CAR`, `TOW_TRUCK`, `TOUR_BUS`, `PARTY_BUS`, `LIMOUSINE`, `ELECTRIC`, `HYBRID` |
| `ServiceType`| The type of service provided.                                                                                      | ENUM  | Yes      | `ECONOMY`, `COMPACT`, `MID_SIZE`, `FULL_SIZE`, `LUXURY`, `RIDE_SHARE`, `CARPOOL`, `AIRPORT_TRANSFER`, `PET_FRIENDLY`, `ACCESSIBLE`, `BUSINESS`, `VIP`, `EXECUTIVE`, `INTERCITY`, `OUTSTATION`, `SELF_DRIVE`, `WITH_DRIVER`, `DELIVERY`, `MOVING`, `FREIGHT`, `COURIER`, `AMBULANCE`, `TOW_TRUCK`, `TOUR`, `PARTY_BUS`, `LIMOUSINE`, `ELECTRIC`, `HYBRID` |
| `bookingDate`| The date when the vehicle was booked.                                                                             | DATE  | Yes      | -                                                                                                                                |
