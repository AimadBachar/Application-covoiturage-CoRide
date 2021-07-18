require('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const session = require("express-session");
const checkLogin = require("./app/middlewares/checkLogin");
const homeController = require("./app/controllers/homeController");


const app = express();
const router = require("./app/router");

const PORT = process.env.PORT || 5000;

//on utilise EJS comme moteur de rendu
app.set("view engine","ejs");
app.set("views",__dirname+"/app/views");

app.use(urlencoded({extended:true}));
app.use(session({
   secret: process.env.SECRET_SESSION,
   resave: false,
   saveUninitialized: true,
   cookie:{
       maxAge: 1000*60*60*2
   } 
}));

app.use(express.static("public"));
app.get("/",(_,res)=>res.render("login"));

app.get("/login",homeController.login);
app.post("/login",homeController.connect);
app.get("/logout",homeController.logout);

app.use("/coride/admin",checkLogin,router);


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});