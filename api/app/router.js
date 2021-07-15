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

/////////Model Vehicle Option////////////////////////////////
router.route("/vehicle-options")
    .get(vehicleOptionController.getAll);

router.route("/vehicle-option/:id(\\d+)")
    .get(vehicleOptionController.getOne);

////////POST OU PATCH un travel//////////////////////////////////////
//TODO gérer le controlleur pour integrer le user...
router.post("/travels/user/:id(\\d+)",travelController.insertOrUpdate);
router.patch("/travel/:travelId(\\d+)/user/:userId(\\d+)",travelController.insertOrUpdate);

////////GET vehicules par user///////////////////////////////////////
router.route("/user/:id(\\d+)/vehicles")
    .get(vehicleController.getAll)
    .post(vehicleController.insertOrUpdate)
    .delete(vehicleController.delete);


//middleware gestion erreur
router.use((err,req,res,next)=>res.status(404).json({"error":err}))

module.exports = router;