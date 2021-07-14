const {Router} = require("express");

const uploadPicture = require("./services/uploadPicture");
const userController = require("./controllers/userController");

const router = Router();


router.route("/users")
    .get(userController.getAll)
    .post(uploadPicture.single("picture"),userController.insertOrUpdate)
    .delete(userController.delete);

router.route("/user/:id(\\d+)")
    .get(userController.getOne)
    .patch(userController.insertOrUpdate);


//middleware gestion erreur
router.use((err,req,res,next)=>res.status(404).json({"error":err}))

module.exports = router;