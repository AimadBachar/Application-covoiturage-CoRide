const multer = require("multer");
const path = require("path");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");


aws.config.loadFromPath(__dirname + "/config.json");

const s3 = new aws.S3();

//on défini le lieu de stockage ainsi que le nom des fichiers importés
const storage = multerS3({
    acl: "public-read",
    s3: s3,
    bucket: process.env.S3_BUCKET,
    metadata: function (req, file, callback) {
        callback(null, {
            fieldname: file.fieldname
        });
    },
    key: function (req, file, callback) {
 
        callback(null, `${file.fieldname}-${Date.now().toString()}${path.extname(file.originalname)}`);
    }
});

//on définie l'upload en determinant les types de fichier acceptés ainsi que la taille max, ici 512ko
const upload = multer({
    fileFilter: function (req, file, callback) {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
            callback(null, true);
        } else {
            callback(new multer.MulterError("not a image file..."));
        }
    },
    storage: storage,
    limits: {
        fileSize: 512000
    }
}).single("picture");


const uploadPicture = {
    /**
     * this express middleware upload image file in disk storage
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    upload: (req, res, next) => {


        upload(req, res, (err) => {

            //en cas d'upload on vérifie la présence d'un fichier enregistré et la présence d'un lien
            //si il y a un lien alors on delete le fichier pour ne pas cumuler les fichiers dans le bucket
            if(req.file?.location && req.body?.picture_link){
                uploadPicture.delete(req.body.picture_link);
            }

            //en cas de taille de fichier superieur à 512ko
            if (err?.code === "LIMIT_FILE_SIZE") {
                return res.status(400).json("error size limit...");
            }

            //en cas de fichier différent de PNG et JPG
            if (err instanceof multer.MulterError && err.code !== "LIMIT_FILE_SIZE") {
                res.status(400).json("file not uploaded since it's not a PNG or JPEG...");
            } else {
                next();
            }
        })
    },

    /**
     * this method delete the file picture for one user current delete
     * @param {string} pictureLink the picture link storage in User instance
     * @returns {Boolean} return true if success or false
     */
    delete: (pictureLink)=>{

        //on découpe l'url pour ne garder que la dernière partie
        const splitString = pictureLink.split("/");

        const params = {
            Bucket: process.env.S3_BUCKET,
            Key: splitString[splitString.length-1]
        };

        //et on delete sur le s3
        const result = s3.deleteObject(params,(err,data)=>{
            if(err) {
                return false;
            }
            else{ 
                return true;
            }
        });

        return result;
    }
}

module.exports = {
    upload: uploadPicture.upload,
    delete: uploadPicture.delete
}
