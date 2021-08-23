const fetch = require("node-fetch");
const methodFetch = require("../services/fetch");

const vehicleOptionController = {

    /**
     * this express middleware fetch all vehicle options in co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async getAll(req, res, next) {

        const vehicleOptions = await methodFetch("GET","/api/v1/vehicle-options",
            {
                Authorization: `Bearer ${req.session.user.token}`
            }
        );

        res.render("vehicleOptions", {
            vehicleOptions: Object.keys(vehicleOptions).length ? vehicleOptions : []
        });
    },

    /**
     * this express middleware delete one activity by id in body
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

            await methodFetch("DELETE",`/api/v1/admin/${req.session.user.id}/vehicle-options`,               
                {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body
            );

            res.redirect("/coride/admin/vehicle-options");
        } catch (err) {
            next(err);
        }
    },

    async add(req,res,next){
        try {

            if(Object.keys(req.body).length < 1){
                return res.render("addVehicleOption");
            }

            const {label} = req.body;
            const body = {
                label
            };

            await methodFetch("POST",`/api/v1/admin/${req.session.user.id}/vehicle-options`,
                {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body
            );

            res.redirect("/coride/admin/vehicle-options");
        } catch (err) {
            next(err);
        }
    }

}

module.exports = vehicleOptionController;