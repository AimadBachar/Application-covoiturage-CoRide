const Travel = require("../models/Travel");

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
            const results = await Travel.findAll();
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
    async insertOrUpdate(req,res,next){

        try{

            const {id} = req.params;
            
            const travel = new Travel(req.body);
            
            if(travel.id && parseInt(id,10) !== travel.id){
                return res.status(401).json("bad request");
            }

            const result = await travel.save();
            res.status(201).json(result);
            

        }catch(err){
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
    async delete(req,res,next){
        try{
            const {id} = req.body;
            const travel = await Travel.findOne(id);
            if(travel){
                await travel.delete();
                res.status(204).end();
            }else{
                next(travel);
            }

        }catch(err){
            next(err);
        }
    }
}

module.exports = travelController;