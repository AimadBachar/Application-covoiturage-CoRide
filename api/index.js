require('dotenv').config({path:"./.env"});
const { urlencoded } = require('express');
const express = require('express');
const cors = require("cors");
const router = require("./app/router");
const loginController = require("./app/controllers/loginController");
const verifyToken = require("./app/middlewares/verrifyToken");

const app = express();

const PORT = process.env.PORT || 5555;

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