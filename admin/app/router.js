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



module.exports = router;