const methodFetch = require("../services/fetch");

const travelController = {

    /**
     * this express middleware fetch all travels in co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async getAll(req, res, next) {

        const travels = await methodFetch("GET", "/api/v1/travels", {
            Authorization: `Bearer ${req.session.user.token}`
        });

        res.render("travels", {
            travels: Object.keys(travels).length ? travels : []
        });
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
                id: parseInt(id, 10)
            };

            await methodFetch("DELETE", `/api/v1/admin/${req.session.user.id}/travels`, {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body
            );

            res.redirect("/coride/admin/travels");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = travelController;