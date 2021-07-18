const Activity = require("../models/Activity");

const activityController = {

    /**
     * This method is an express middleware for get all rows in Activity model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {array} an array of objects Activity OR an Error
     */
    async getAll(req, res, next) {

        try {
            const results = await Activity.findAll();
            return res.json(results);
        } catch (err) {
            next(err);
        }
    },

    /**
     * This function is a express middleware for get one row in Activity model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} an object Activity or error 404 if id don't exist
     */
    async getOne(req, res, next) {

        try {
            const {
                id
            } = req.params;
            const result = await Activity.findOne(id); 
            return res.json(result);
            
        } catch (err) {
            next(err);
        }
    },

    /**
     * This method is a express middleware for insert or update one row in Activity model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} return an object modify or insert in db
     */
    async insertOrUpdate(req,res,next){

        try{

            const {id} = req.params;
            
            const activity = new Activity(req.body);
            
            if(activity.id && parseInt(id,10) !== activity.id){
                return res.status(401).json("bad request");
            }

            const result = await activity.save();
            res.status(201).json(result);
            

        }catch(err){
            next(err);
        }
    },

    /**
     * This method is a express middleware for delete one row in Activity model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {null}
     */
    async delete(req,res,next){
        try{
            const {id} = req.body;
            const activity = await Activity.findOne(id);
            if(activity){
                await activity.delete();
                res.status(204).end();
            }else{
                next(activity);
            }

        }catch(err){
            next(err);
        }
    }
}

module.exports = activityController;