const {Router} = require("express");

const uploadPicture = require("./services/uploadPicture");
const userController = require("./controllers/userController");
const activityController = require("./controllers/activityController");
const travelController = require("./controllers/travelController");
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
    .get(travelController.getAll)
    .post(travelController.insertOrUpdate)
    .delete(travelController.delete);

router.route("/travel/:id(\\d+)")
    .get(travelController.getOne)
    .patch(travelController.insertOrUpdate);

/////////Model Vehicle Option////////////////////////////////
router.route("/vehicle-options")
    .get(vehicleOptionController.getAll)
    .post(vehicleOptionController.insertOrUpdate)
    .delete(vehicleOptionController.delete);

router.route("/vehicle-option/:id(\\d+)")
    .get(vehicleOptionController.getOne)
    .patch(vehicleOptionController.insertOrUpdate);

//middleware gestion erreur
router.use((err,req,res,next)=>res.status(404).json({"error":err}))

module.exports = router;