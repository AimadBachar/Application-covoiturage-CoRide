const fetch = require("node-fetch");

const userController = {

    async getAll(req,res,next){

        const results = await fetch("http://18.235.248.88:3000/api/v1/users",{
            method: "GET",
            headers: {
                Authorization: `Bearer ${req.session.user.token}`
            }
        });

        const users = await results.json();

        res.render("users",{users});
    },

    async delete(){
        
    }
}

module.exports = userController;