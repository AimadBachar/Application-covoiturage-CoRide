require('dotenv').config();
const express = require('express');


const app = express();
const router = require("./app/router");

const PORT = process.env.PORT || 5000;

//on utilise EJS comme moteur de rendu
app.set("view engine","ejs");
app.set("views",__dirname+"/app/views");

app.use(express.static("public"));
app.use("/coride/admin",router);


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});