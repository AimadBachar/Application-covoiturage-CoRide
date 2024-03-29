const Travel = require("../models/Travel");
const User = require("../models/User");

const travelController = {

    /**
     * This method is an express middleware for get all rows in Travel model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {array} an array of objects Travel OR an Error
     */
    async getAll(req, res, next) {

        try {
            let results;
            const {
                id
            } = req.params;
            if (id) {
                results = await Travel.findAll({
                    where: {
                        driver_id: id
                    }
                });
            } else {
                results = await Travel.findAll();
            }
            return res.json(results);
        } catch (err) {
            next(err);
        }
    },

    /**
     * this express middleware returns results by coords geoloc
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {Array} return an json array or an error
     */
    async getAllByFilters(req, res, next) {
        try {

            let results;

            const {
                long,
                lat,
                ray
            } = req.query;

            if ((long && !lat) || (!long && lat)) {
                return res.status(400).json("query is wrong...");
            }

            if (long && lat) {

                const keys = Object.keys(req.query).filter(key=>key!=="long" && key!=="lat");
                const filters = {};

                for (const key in req.query) {
                    if(keys.includes(key)){
                    filters[key] = req.query[key];
                    };
                };

                results = await Travel.findByCoords(long, lat, ray, {
                    where: filters
                });

            } else {

                const filters = {};

                for (const key in req.query) {
                    filters[key] = req.query[key];
                };

                if (filters["ray"]) {
                    return res.status(400).json("query is wrong...");
                };

                results = await Travel.findAll({
                    where: filters
                });

            }

            return res.json(results);

        } catch (err) {
            next(err);
        }
    },

    /**
     * This function is a express middleware for get one row in Travel model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} an object Travel or error 404 if id don't exist
     */
    async getOne(req, res, next) {

        try {
            const {
                id
            } = req.params;
            const result = await Travel.findOne(id);
            return res.json(result);

        } catch (err) {
            next(err);
        }
    },

    /**
     * This method is a express middleware for insert or update one row in Travel model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} return an object modify or insert in db
     */
    async insertOrUpdate(req, res, next) {

        try {

            const {
                id,
                travelId,
                userId
            } = req.params;

            const user = await User.findOne(id || userId);

            if (travelId) {
                const updateTravel = await Travel.findOne(travelId);
                if (!updateTravel) {
                    return res.status(400).json("bad request");
                }
            }

            if (!user || user.id != req.body.user_id) {
                return res.status(400).json("bad request");
            }

            const travel = new Travel(req.body);
            travel.user_id = user.id;

            const result = await travel.save();

            res.status(201).json(result);


        } catch (err) {
            next(err);
        }
    },

    /**
     * This method is a express middleware for delete one row in Travel model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {null}
     */
    async delete(req, res, next) {

        console.log("controller")

        try {
            const {
                id
            } = req.body;
            const {
                id:userId
            } = req.params;
            const travel = await Travel.findOne(id);

            if (travel && (userId == travel.driver_id || req.user.admin)) {

                await travel.delete();

                res.status(204).end();
            } else {
                next();
            }

        } catch (err) {
            next(err);
        }
    }
}

module.exports = travelController;