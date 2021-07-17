const fetch = require("node-fetch");

const travelController = {

    async getAll(req,res,next){

        const results = await fetch("http://18.235.248.88:3000/api/v1/travels",{
            method: "GET",
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvcmlkZUFwcCIsInJvbGUiOiJmcm9udCIsImlhdCI6MTYyNjQzMTMxNn0.1CNqBMz8qsl2SsOL0WCmJOBC01ta1smRrOLA0sUs2eA`
            }
        });

        const travels = await results.json();

        res.render("travels",{travels});
    },

    async delete(){
        
    }
}

module.exports = travelController;