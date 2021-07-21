const fetch = require("node-fetch");

const userController = {

    /**
     * this express middleware fetch all users in co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
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

    /**
     * this express middleware delete one user by id in co'ride api
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

            await fetch("http://18.235.248.88:3000/api/v1/users", {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body: JSON.stringify(body)
            });

            res.redirect("/coride/admin/users");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userController;