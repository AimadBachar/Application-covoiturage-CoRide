const fetch = require("node-fetch");

const homeController = {

    /**
     * this express middleware render home page where user is login
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async home(req,res,next){

        res.render("index");
    },

    /**
     * this express middlaware render the form login
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async login(req,res,next){
        res.render("login");
    },

    /**
     * this express middleware fetch login to co'ride api and render home page or error 401
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
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
                res.status(401).render("login",{error:"Utilisateur ou mot de passe incorrect..."});
            }


        }catch(err){
            next(err);
        }
    },

    /**
     * this express middleware logout session
     * @param {request} req 
     * @param {response} res 
     */
    logout(req,res){
        delete req.session.user;
        res.render("login",{message: "Vous êtes deconnecté"});
    }
}

module.exports = homeController;