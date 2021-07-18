const fetch = require("node-fetch");

const vehicleOptionController = {

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

    async delete(req, res, next) {

        try {
            const {
                id
            } = req.query;
            const body = {
                id: parseInt(id,10)
            };

            console.log(body)

            const results = await fetch("http://18.235.248.88:3000/api/v1/vehicle-options", {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body: JSON.stringify(body)
            });

            const result = await results.json();

            console.log(result)

            res.redirect("/coride/admin/vehicle-options");
        } catch (err) {
            next(err);
        }
    }

}

module.exports = vehicleOptionController;