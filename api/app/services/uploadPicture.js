const multer = require("multer");
const path = require("path");

//on défini le lieu de stockage ainsi que le nom des fichiers importés
const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,__dirname+"/../pictures/");
    },
    filename: function(req,file,callback){
        callback(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

//on définie l'upload en determinant les types de fichier acceptés ainsi que la taille max, ici 512ko
const upload = multer({
    fileFilter: function(req,file,callback){
        if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
            callback(null,true);
        }else{
            callback(new multer.MulterError("not a image file..."));
        }
    },
    storage: storage,
    limits:{
        fileSize: 512000
    }
}).single("picture");


/**
 * this express middleware upload image file in disk storage
 * @param {request} req 
 * @param {response} res 
 * @param {function} next 
 */
module.exports = (req,res,next)=>{
    upload(req,res, (err)=>{

        if(err?.code === "LIMIT_FILE_SIZE"){
            return res.status(400).json("error size limit...");
        }

        if(err instanceof multer.MulterError && err.code !== "LIMIT_FILE_SIZE") {
            res.status(400).json("file not uploaded since it's not a PNG or JPEG...");
        }else{
            next();
        }
    })
}