const fetch = require("node-fetch");
const { add } = require("./activityController");

const vehicleOptionController = {

    /**
     * this express middleware fetch all vehicle options in co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async getAll(req, res, next) {

        const results = await fetch("http://18.235.248.88:3000/api/v1/vehicle-options", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${req.session.user.token}`
            }
        });

        const vehicleOptions = await results.json();

        res.render("vehicleOptions", {
            vehicleOptions
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

            console.log(body)

            await fetch(`http://18.235.248.88:3000/api/v1/admin/${process.env.ADMIN_ID}/vehicle-options`, {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body: JSON.stringify(body)
            });

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

            await fetch(`http://18.235.248.88:3000/api/v1/admin/${process.env.ADMIN_ID}/vehicle-options`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body: JSON.stringify(body)
            });

            res.redirect("/coride/admin/vehicle-options");
        } catch (err) {
            next(err);
        }
    }

}

module.exports = vehicleOptionController;