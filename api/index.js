require('dotenv').config({path:"./.env"});
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5555;

//route de test pour vérifier le fonctionnement du serveur
app.get("/",(_,res)=>res.json({"message":"hello world!"}));

app.listen(PORT, () => {
    console.log(`Server for API TEST started on http://localhost:${PORT}`);
});