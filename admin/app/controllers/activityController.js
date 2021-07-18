const fetch = require("node-fetch");

const activityController = {

    async getAll(req,res,next){

        const results = await fetch("http://18.235.248.88:3000/api/v1/activities",{
            method: "GET",
            headers: {
                Authorization: `Bearer ${req.session.user.token}`
            }
        });

        const activities = await results.json();

        res.render("activities",{activities});
    },

    async delete(){
        
    }
}

module.exports = activityController;