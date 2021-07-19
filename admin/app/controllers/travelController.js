const fetch = require("node-fetch");

const travelController = {

    /**
     * this express middleware fetch all travels in co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
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

    /**
     * this express middleware delete one travel by id in co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
     async delete(req, res, next) {

        try {
            const {
                id
            } = req.query;
            const body = {
                id: parseInt(id,10)
            };

            const results = await fetch("http://18.235.248.88:3000/api/v1/travels", {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body: JSON.stringify(body)
            });

            const result = await results.json();

            res.redirect("/coride/admin/travels");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = travelController;