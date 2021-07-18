const fetch = require("node-fetch");

const travelController = {

    async getAll(req,res,next){

        const results = await fetch("http://18.235.248.88:3000/api/v1/travels",{
            method: "GET",
            headers: {
                Authorization: `Bearer ${req.session.user.token}`
            }
        });

        const travels = await results.json();

        res.render("travels",{travels});
    },

    async delete(){
        
    }
}

module.exports = travelController;