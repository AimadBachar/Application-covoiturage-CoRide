const methodFetch = require("../services/fetch");

const userController = {

    /**
     * this express middleware fetch all users in co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async getAll(req,res,next){

        const users = await methodFetch("GET","/api/v1/users",         
            {
                Authorization: `Bearer ${req.session.user.token}`
            }
        );

        res.render("users",{
            users: Object.keys(users).length ? users : []
        });
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

            await methodFetch("DELETE",`/api/v1/admin/${req.session.user.id}/users`,           
                {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body
            );

            res.redirect("/coride/admin/users");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userController;