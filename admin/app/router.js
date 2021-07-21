const {Router} = require("express");
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");
const travelController = require("./controllers/travelController");
const activityController = require("./controllers/activityController");
const vehicleOptionController = require("./controllers/vehicleOptionController");
const router = Router();


router.get("/",homeController.home);
router.get("/users",userController.getAll);
router.get("/travels",travelController.getAll);
router.get("/activities",activityController.getAll);
router.get("/vehicle-options",vehicleOptionController.getAll);

router.get("/users/delete",userController.delete);
router.get("/travels/delete",travelController.delete);
router.get("/activities/delete",activityController.delete);
router.get("/vehicle-options/delete",vehicleOptionController.delete);

router.get("/activities/add",activityController.add);
router.post("/activities/add",activityController.add);

router.get("/vehicle-options/add",vehicleOptionController.add);
router.post("/vehicle-options/add",vehicleOptionController.add);

module.exports = router;