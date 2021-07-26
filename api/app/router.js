const {Router} = require("express");
const router = Router();

//controllers////////////////////////////////////////////////////////////////////
const userController = require("./controllers/userController");
const activityController = require("./controllers/activityController");
const travelController = require("./controllers/travelController");
const vehicleController = require("./controllers/vehicleController");
const vehicleOptionController = require("./controllers/vehicleOptionController");
/////////////////////////////////////////////////////////////////////////////////

//services and middlewares///////////////////////////////////////////////////////
const {upload:uploadPicture} = require("./services/uploadPicture");
const joiValidator = require("./middlewares/joiValidator");
const verifyToken = require("./middlewares/verifyToken");
const schemas = require("./schemas");
const redis = require("./services/redisService");
const searchCities = require("./services/searchCities");
const hashPassword = require("./services/hashPassword");
/////////////////////////////////////////////////////////////////////////////////



////////////Fetch api open Cage Data for find city////////////
/**
 * @typedef coords 
 * @property {number} lat the name of city
 * @property {number} lng the postcode of city
 */
/**
 * @typedef City 
 * @property {string} city the name of city
 * @property {number} postcode the postcode of city
 * @property {coords.model} coords an object with lat and lng
 */
/**
 * @route GET /cities
 * @group Fetch API open Cage Data
 * @param {string} city.query.required the name of city search
 * @returns {Array<City>} 200 - city details (name, postcode and coords)
 */
router.get("/cities",redis.cache,searchCities);
//////////////////////////////////////////////////////////////

////////////Model User////////////////////////////////////////
/**
 * @route GET /users
 * @group Users - Operations about user
 * @security JWT
 * @returns {Array<User>} 200 - user details
 * @returns {Error} default - Unexpected error
 */
/**
 * @typedef postUser 
 * @property {string} first_name.required the first name user
 * @property {string} last_name.required the last name user
 * @property {string} email.required the user email
 * @property {string} birthdate.required the user birthdate
 * @property {file} picture the avatar file JPEG or PNG 512Ko max
 * @property {string} picture_link the link for user profil picture
 * @property {string} pseudo.required the user pseudo
 * @property {string} password.required the hash user password
 */
/**
 * @typedef loginUser 
 * @property {string} user.required the user name
 * @property {string} password.required the password user
 */
/**
 * @typedef loginResponse 
  * @property {number} userId.required the user ID
  * @property {string} first_name the first name
  * @property {string} last_name the last name
  * @property {string} birthdate the user birthdate
  * @property {string} picture_link the link for catch the profil picture
  * @property {string} created_at date of register
  * @property {string} updated_at date of update account
  * @property {string} token the user JWT
 */
/**
 * @route POST /users
 * @group Users - Operations about user
 * @param {postUser.model} postUser.body.required the new user
 * @consumes multipart/form-data
 * @produces application/json
 * @returns {integer} 200 - user id
 * @returns {Error} default - Unexpected error
 */
/**
 * @route POST /user/login
 * @group Users - Operations about user
 * @param {loginUser.model} loginUser.body.required the new user
 * @consumes application/json
 * @produces application/json
 * @returns {loginResponse.model} 200 - JWT and user id
 * @returns {Error} 403 - unauthorized
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /users
 * @group Users - Operations about user
 * @security JWT
 * @param {number} id.body.required the user id 
 * @returns {void} 204 - success, no content
 * @returns {Error} 400 - bad request
 * @returns {Error} default - Unexpected error
 */
router.post("/user/login",userController.login);
router.route("/users")
    .get(verifyToken,redis.cache,userController.getAll)
    .post(redis.flush,uploadPicture,joiValidator(schemas.user),hashPassword.hash,userController.insertOrUpdate)
    .delete(verifyToken,redis.flush,userController.delete);

/**
 * @route GET /user/{id}
 * @group Users - Operations about user
 * @security JWT
 * @param {number} id.path.required the user id
 * @returns {User.model} 200 - user details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route PATCH /user/{id}
 * @group Users - Operations about user
 * @security JWT
 * @param {number} id.path.required the user id
 * @param {postUser.model} postUser.body.required
 * @consumes multipart/form-data
 * @returns {integer} 200 - the user id
 * @returns {Error} default - Unexpected error
 */
router.route("/user/:id(\\d+)")
    .get(verifyToken,redis.cache,userController.getOne)
    .patch(verifyToken,redis.flush,uploadPicture,joiValidator(schemas.user),hashPassword.hash,userController.insertOrUpdate);

////////////Model Activity////////////////////////////////////
/**
 * @route GET /activities
 * @group Activities - Operations about activity
 * @returns {Array<Activity>} 200 - activities details
 * @returns {Error} default - Unexpected error
 */
/**
 * @typedef postActivity 
 * @property {string} label.required the name activity
 * @property {string} color.required the color tag activity
 */
/**
 * @route POST /admin/{userId}/activities
 * @group Activities - Operations about activity
 * @security JWT
 * @param {postActivity.model} postActivity.body.required the new user
 * @param {number} userId.path.required the user id
 * @consumes application/json
 * @produces application/json
 * @returns {Activity.model} 200 - activity details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /admin/{userId}/activities
 * @group Activities - Operations about activity
 * @security JWT
 * @param {number} id.body.required the activity id 
 * @param {number} userId.path.required the id admin
 * @returns {void} 204 - success, no content
 * @returns {Error} 400 - bad request
 * @returns {Error} default - Unexpected error
 */
router.route("/activities")
    .get(redis.cache,activityController.getAll);
router.route("/admin/:userId/activities")
    .post(verifyToken,redis.flush,joiValidator(schemas.activity),activityController.insertOrUpdate)
    .delete(verifyToken,redis.flush,activityController.delete);

/**
 * @route GET /activity/{id}
 * @group Activities - Operations about activity
 * @param {number} id.path.required the activity id
 * @returns {Activity.model} 200 - user details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route PATCH /admin/{userId}/activity/{id}
 * @group Activities - Operations about activity
 * @security JWT
 * @param {number} id.path.required the activity id
 * @param {postActivity.model} postActivity.body.required
 * @consumes application/json
 * @returns {Activity.model} 200 - activity details
 * @returns {Error} default - Unexpected error
 */
router.route("/activity/:id(\\d+)")
    .get(redis.cache,activityController.getOne);
router.route("/admin/:userId/activity/:id(\\d+)")
    .patch(verifyToken,redis.flush,joiValidator(schemas.activity),activityController.insertOrUpdate);

//////////Model Travel///////////////////////////////////////
/**
 * @route GET /travels
 * @group Travels - Operations about travel
 * @returns {Array<Travel>} 200 - travels details
 * @returns {Error} default - Unexpected error
 */
router.route("/travels")
    .get(redis.cache,travelController.getAll);

/**
 * @route GET /travel/{id}
 * @group Travels - Operations about travel
 * @param {number} id.path.required the travel id
 * @returns {Travel.model} 200 - travel details
 * @returns {Error} default - Unexpected error
 */
router.route("/travel/:id(\\d+)")
    .get(redis.cache,travelController.getOne);

/**
 * @route GET /travels/search
 * @group Travels - Operations about travel
 * @param {number} long.query the longitude departure
 * @param {number} lat.query the lalitude departure
 * @param {number} ray.query the rayon for search coords
 * @param {string} departure_city.query the name of departure city
 * @param {string} destination_city the name of destination city
 * @param {number} activity_id.query the activity id
 * @param {number} user_id.query the user id
 * @param {date} departure_timestamp.query the date of departure format YYYY-MM-DD
 * @returns {Array<Travel>} 200 - travels details
 * @returns {Error} default - Unexpected error
 */
router.get("/travels/search",travelController.getAllByFilters);

/////////Model Vehicle Option////////////////////////////////
/**
 * @route GET /vehicle-options
 * @group Vehicle Option - Operations about vehicle option
 * @returns {Array<VehicleOption>} 200 - travels details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /admin/{userId}/vehicle-options
 * @group Vehicle Option - Operations about vehicle option
 * @security JWT
 * @param {integer} id.body.required the vehicle option id
 * @param {integer} userId.path.required
 * @returns {void} 204 - return void or error
 * @returns {Error} default - Unexpected error
 */
/**
 * @typedef postVehicleOption
 * @property {string} label.required the label of vehicle option
 */
/**
 * @route POST /admin/{userId}/vehicle-options
 * @group Vehicle Option - Operations about vehicle option
 * @security JWT
 * @param {postVehicleOption.model} postVehicleOption.body.required the post for vehicle option
 * @param {integer} userId.path.required the admin id
 * @consumes application/json
 * @returns {VehicleOption.model} 204 - return void or error
 * @returns {Error} default - Unexpected error
 */    
router.route("/vehicle-options")
    .get(redis.cache,vehicleOptionController.getAll);
    router.route("/admin/:userId/vehicle-options")
    .post(verifyToken,redis.flush,vehicleOptionController.insertOrUpdate)
    .delete(verifyToken,redis.flush,vehicleOptionController.delete);

/**
 * @route GET /vehicle-option/{id}
 * @group Vehicle Option - Operations about vehicle option
 * @param {number} id.path.required the vehicle option id
 * @returns {VehicleOption.model} 200 - travel details
 * @returns {Error} default - Unexpected error
 */  
router.route("/vehicle-option/:id(\\d+)")
    .get(verifyToken,redis.cache,vehicleOptionController.getOne);
    
////////CRUD un travel//////////////////////////////////////
/**
 * @typedef postTravel 
 * @property {string} departure_city.required the name departure city
 * @property {string} destination_city.required the name destination city
 * @property {number} latitude_departure.required the latitude coords in float
 * @property {number} longitude_departure.required the longitude coords in float
 * @property {integer} places_available.required the number of places
 * @property {string} description.required the travel description
 * @property {string} departure_timestamp.required the date and time departure
 * @property {integer} activity_id.required the id of activity
 * @property {integer} user_id.required the id of user
 */
/**
 * @route POST /travels/user/{id}
 * @group Travels - Operations about travel
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {postTravel.model} postTravel.body.required the new travel
 * @consumes application/json
 * @produces application/json
 * @returns {Travel.model} 200 - user details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route PATCH /travel/{travelId}/user/{userId}
 * @group Travels - Operations about travel
 * @security JWT
 * @param {integer} userId.path.required the user id
 * @param {integer} travelId.path.required the travel id
 * @param {postTravel.model} postTravel.body.required the new user
 * @consumes application/json
 * @produces application/json
 * @returns {Travel.model} 200 - user details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route GET /travels/user/{id}
 * @group Travels - Operations about travel
 * @security JWT
 * @param {number} id.path.required the user id
 * @returns {Array<Travel>} 200 - user details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /travels/user/{id}
 * @group Travels - Operations about travel
 * @security JWT
 * @param {number} id.path.required the user id
 * @param {number} id.body.required the travel id
 * @returns {void} 204 - success, no content
 * @returns {Error} 400 - bad request
 * @returns {Error} default - Unexpected error
 */
 router.route("/travels/user/:id(\\d+)")
    .get(verifyToken,redis.cache,travelController.getAll)
    .delete(verifyToken,redis.flush,travelController.delete)
    .post(verifyToken,joiValidator(schemas.travel),redis.flush,travelController.insertOrUpdate);
router.patch("/travel/:travelId(\\d+)/user/:userId(\\d+)",verifyToken,joiValidator(schemas.travel),redis.flush,travelController.insertOrUpdate);

////////CRUD vehicules par user///////////////////////////////////////
/**
 * @route GET /user/{id}/vehicles
 * @group Users - Operations about user
 * @param {integer} id.path.required the user id
 * @security JWT
 * @returns {Array<Vehicle>} 200 - vehicle details
 * @returns {Error} default - Unexpected error
 */
/**
 * @typedef postVehicle 
 * @property {string} brand.required the vehicle brand
 * @property {string} model.required the vehicle model
 */
/**
 * @route POST /user/{id}/vehicles
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {postVehicle.model} postVehicle.body.required the new vehicle
 * @consumes application/json
 * @produces application/json
 * @returns {Vehicle.model} 200 - vehicle details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /user/{id}/vehicles
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {number} id.body.required the vehicle id 
 * @returns {void} 204 - success, no content
 * @returns {Error} 400 - bad request
 * @returns {Error} default - Unexpected error
 */
router.route("/user/:id(\\d+)/vehicles")
    .get(verifyToken,redis.cache,vehicleController.getAll)
    .post(verifyToken,redis.flush,vehicleController.insertOrUpdate)
    .delete(verifyToken,redis.flush,vehicleController.delete);
/**
 * @route PATCH /user/{userId}/vehicle/{vehicleId}
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} userId.path.required the user id
 * @param {integer} vehicleId.path.required the vehicle id
 * @param {postVehicle.model} postVehicle.body.required the modify vehicle
 * @consumes application/json
 * @produces application/json
 * @returns {Vehicle.model} 200 - vehicle details
 * @returns {Error} default - Unexpected error
 */
router.patch("/user/:userId(\\d+)/vehicle/:vehicleId(\\d+)",verifyToken,joiValidator(schemas.vehicle),redis.flush,vehicleController.insertOrUpdate);

//////GET POST et DELETE activité d'un user///////////////////////////////////////
/**
 * @route GET /user/{id}/activities
 * @group Users - Operations about user
 * @param {integer} id.path.required the user id
 * @security JWT
 * @returns {Array<Activity>} 200 - vehicle details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route POST /user/{id}/activities
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {integer} id.body.required the activity id
 * @consumes application/json
 * @produces application/json
 * @returns {void} 201 - asuccess, no content
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /user/{id}/activities
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {integer} id.body.required the activity id 
 * @returns {void} 204 - success, no content
 * @returns {Error} 400 - bad request
 * @returns {Error} default - Unexpected error
 */
router.route("/user/:id(\\d+)/activities")
    .get(verifyToken,redis.cache,userController.showActivities)
    .post(verifyToken,redis.flush,userController.addUserActivity)
    .delete(verifyToken,redis.flush,userController.deleteUserActivity);

//////GET POST et DELETE option véhicule d'un user////////////////////////////////
/**
 * @route GET /user/{id}/vehicle-options
 * @group Users - Operations about user
 * @param {integer} id.path.required the user id
 * @security JWT
 * @returns {Array<VehicleOption>} 200 - vehicle option details
 * @returns {Error} default - Unexpected error
 */
/**
 * @route POST /user/{id}/vehicle-options
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {integer} id.body.required the vehicle option id
 * @consumes application/json
 * @returns {void} 201 - success, no content
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /user/{id}/vehicle-options
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {integer} id.body.required the vehicle option id 
 * @returns {void} 204 - success, no content
 * @returns {Error} 400 - bad request
 * @returns {Error} default - Unexpected error
 */
router.route("/user/:id(\\d+)/vehicle-options")
    .get(verifyToken,redis.cache,userController.showVehicleOptions)
    .post(verifyToken,redis.flush,userController.addUserOptionVehicle)
    .delete(verifyToken,redis.flush,userController.deleteUserOptionVehicle);


/**
 * @route POST /user/{id}/travels
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {integer} id.body.required the travel id
 * @consumes application/json
 * @returns {void} 201 - success, no content
 * @returns {Error} default - Unexpected error
 */
/**
 * @route DELETE /user/{id}/travels
 * @group Users - Operations about user
 * @security JWT
 * @param {integer} id.path.required the user id
 * @param {integer} id.body.required the travel id 
 * @returns {void} 204 - success, no content
 * @returns {Error} 400 - bad request
 * @returns {Error} default - Unexpected error
 */
router.route("/user/:id(\\d+)/travels")
    .post(verifyToken,redis.flush,userController.addUserTravel)
    .delete(verifyToken,redis.flush,userController.deleteUserTravel);

//middleware gestion erreur
router.use((err,_,res,__)=>res.status(404).json({"error":err}))

module.exports = router;