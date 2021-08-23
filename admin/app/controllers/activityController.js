const methodFetch = require("../services/fetch");

const activityController = {

    /**
     * this express middleware get all activity fetch to co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async getAll(req, res, next) {

        try {
            const activities = await methodFetch("GET", "/api/v1/activities", {
                Authorization: `Bearer ${req.session.user.token}`
            });

            res.render("activities", {
                activities: Object.keys(activities).length ? activities : []
            });
        } catch (err) {
            next(err);
        }
    },

    /**
     * this express middleware delete one activity by id in co'ride api
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

            await methodFetch("DELETE", `/api/v1/admin/${req.session.user.id}/activities`, {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body
            );

            res.redirect("/coride/admin/activities");
        } catch (err) {
            next(err);
        }
    },

    async add(req, res, next) {
        try {

            if (Object.keys(req.body).length < 1) {
                return res.render("addActivity");
            }

            const {
                label,
                color
            } = req.body;

            const body = {
                label,
                color
            };

            const result = await methodFetch("POST", `/api/v1/admin/${req.session.user.id}/activities`, {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body
            );

            if (result) {
                res.redirect("/coride/admin/activities");
            } else {
                next(result)
            }


        } catch (err) {
            next(err);
        }
    }
}

module.exports = activityController;