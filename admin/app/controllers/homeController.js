const fetch = require("node-fetch");

const homeController = {

    async home(req,res,next){

        res.render("index");
    },

    async login(req,res,next){
        res.render("login");
    },

    async connect(req,res,next){
        try{
            const {user,password} = req.body;
            
            const login = {
                user: user,
                password: password
            };

            const result = await fetch("http://18.235.248.88:3000/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(login)
            });

            const token = await result.json();

            if(token.token){
                req.session.user = {
                    user: user,
                    token: token.token
                }
                res.render("index");
            }else{
                res.status(401).render("login");
            }


        }catch(err){
            next(err);
        }
    }
}

module.exports = homeController;