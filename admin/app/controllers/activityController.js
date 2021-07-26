const fetch = require("node-fetch");

const activityController = {

    /**
     * this express middleware get all activity fetch to co'ride api
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    async getAll(req,res,next){

        try{
        const results = await fetch("http://18.235.248.88:3000/api/v1/activities",{
            method: "GET",
            headers: {
                Authorization: `Bearer ${req.session.user.token}`
            }
        });

        const activities = await results.json();

        res.render("activities",{activities});
    }catch(err){
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
                id: parseInt(id,10)
            };

            await fetch(`http://18.235.248.88:3000/api/v1/admin/${process.env.ADMIN_ID}/activities`, {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body: JSON.stringify(body)
            });

            res.redirect("/coride/admin/activities");
        } catch (err) {
            next(err);
        }
    },

    async add(req,res,next){
        try {

            if(Object.keys(req.body).length < 1){
                return res.render("addActivity");
            }

            const {label,color} = req.body;
            const body = {
                label,
                color
            };

            await fetch(`http://18.235.248.88:3000/api/v1/admin/${process.env.ADMIN_ID}/activities`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${req.session.user.token}`
                },
                body: JSON.stringify(body)
            });

            res.redirect("/coride/admin/activities");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = activityController;