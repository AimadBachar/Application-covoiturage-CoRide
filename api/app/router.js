const {Router} = require("express");


const uploadPicture = require("./services/uploadPicture");
const userController = require("./controllers/userController");
const activityController = require("./controllers/activityController");
const travelController = require("./controllers/travelController");
const vehicleController = require("./controllers/vehicleController");
const vehicleOptionController = require("./controllers/vehicleOptionController");

const router = Router();

////////////Model User////////////////////////////////////////
router.route("/users")
    .get(userController.getAll)
    .post(uploadPicture,userController.insertOrUpdate)
    .delete(userController.delete);

router.route("/user/:id(\\d+)")
    .get(userController.getOne)
    .patch(userController.insertOrUpdate);

////////////Model Activity////////////////////////////////////
router.route("/activities")
    .get(activityController.getAll)
    .post(activityController.insertOrUpdate)
    .delete(activityController.delete);

router.route("/activity/:id(\\d+)")
    .get(activityController.getOne)
    .patch(activityController.insertOrUpdate);

//////////Model Travel///////////////////////////////////////
router.route("/travels")
    .get(travelController.getAll);

router.route("/travel/:id(\\d+)")
    .get(travelController.getOne);

router.get("/travels/search",travelController.getAllByCoords);

/////////Model Vehicle Option////////////////////////////////
router.route("/vehicle-options")
    .get(vehicleOptionController.getAll);

router.route("/vehicle-option/:id(\\d+)")
    .get(vehicleOptionController.getOne);

////////POST OU PATCH un travel//////////////////////////////////////
router.post("/travels/user/:id(\\d+)",travelController.insertOrUpdate);
router.patch("/travel/:travelId(\\d+)/user/:userId(\\d+)",travelController.insertOrUpdate);

////////CRUD vehicules par user///////////////////////////////////////
router.route("/user/:id(\\d+)/vehicles")
    .get(vehicleController.getAll)
    .post(vehicleController.insertOrUpdate)
    .delete(vehicleController.delete);
router.patch("/user/:userId(\\d+)/vehicle/:vehicleId(\\d+)",vehicleController.insertOrUpdate);

///////GET POST or PATCH un travel pour un user////////////////////////////////////
router.route("/travels/user/:id(\\d+)")
    .get(travelController.getAll)
    .post(travelController.insertOrUpdate)
    .delete(travelController.delete);
router.patch("/travel/:travelId(\\d+)/user/:userId(\\d+)",travelController.insertOrUpdate);

//////GET POST et DELETE activité d'un user///////////////////////////////////////
router.route("/user/:id(\\d+)/activities")
    .get(userController.showActivities)
    .post(userController.addUserActivity)
    .delete(userController.deleteUserActivity);

//////GET POST et DELETE option véhicule d'un user////////////////////////////////
router.route("/user/:id(\\d+)/vehicle-options")
    .get(userController.showVehicleOptions)
    .post(userController.addUserOptionVehicle)
    .delete(userController.deleteUserOptionVehicle);


//middleware gestion erreur
router.use((err,req,res,next)=>res.status(404).json({"error":err}))

module.exports = router;