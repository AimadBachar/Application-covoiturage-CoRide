require('dotenv').config({path:"./.env"});
const { urlencoded } = require('express');
const express = require('express');
const cors = require("cors");
const router = require("./app/router");
const loginController = require("./app/controllers/loginController");
const verifyToken = require("./app/middlewares/verrifyToken");

const app = express();
const expressSwagger = require("express-swagger-generator")(app);

////////////////////Options Swagger///////////////////////////
const options = {
    swaggerDefinition: {
        info: {
            description: "This is the API for Co'Ride App.",
            title: "API Co'Ride",
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/api/v1',
        produces: [
            "application/json",
            "multipart/form-data"
        ],
        schemes: ['http'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "The JWT for connect to this API",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./app/**/*.js'] //Path to the API handle folder
};
///////////////////////////////////////////////////////////////////

const PORT = process.env.PORT || 5555;

expressSwagger(options);
app.use(cors());
app.use(urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("app/pictures"));
//route de test pour vérifier le fonctionnement du serveur
app.get("/",(_,res)=>res.json({"message":"hello world!"}));

app.post("/login",loginController);

app.use("/api/v1",verifyToken,router);

app.listen(PORT, () => {
    console.log(`Server for API TEST started on http://localhost:${PORT}`);
});