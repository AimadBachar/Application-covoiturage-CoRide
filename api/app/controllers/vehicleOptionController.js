const VehicleOption = require("../models/VehicleOption");

const vehicleOptionController = {

    /**
     * This method is an express middleware for get all rows in Vehicle Option model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {array} an array of objects Vehicle Option OR an Error
     */
    async getAll(req, res, next) {

        try {
            const results = await VehicleOption.findAll();
            return res.json(results);
        } catch (err) {
            next(err);
        }
    },

    /**
     * This function is a express middleware for get one row in Vehicle Option model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} an object Vehicle Option or error 404 if id don't exist
     */
    async getOne(req, res, next) {

        try {
            const {
                id
            } = req.params;
            const result = await VehicleOption.findOne(id); 
            return res.json(result);
            
        } catch (err) {
            next(err);
        }
    },

    /**
     * This method is a express middleware for insert or update one row in Vehicle Option model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} return an object modify or insert in db
     */
    async insertOrUpdate(req,res,next){

        try{

            const {id} = req.params;
            
            const vehicleOption = new VehicleOption(req.body);
            
            if(vehicleOption.id && parseInt(id,10) !== vehicleOption.id){
                return res.status(401).json("bad request");
            }

            const result = await vehicleOption.save();
            res.status(201).json(result);
            

        }catch(err){
            next(err);
        }
    },

    /**
     * This method is a express middleware for delete one row in Vehicle Option model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {null}
     */
    async delete(req,res,next){
        try{
            const {id} = req.body;
            const vehicleOption = await VehicleOption.findOne(id);
            if(vehicleOption){
                await vehicleOption.delete();
                res.status(204).end();
            }else{
                next(vehicleOption);
            }

        }catch(err){
            next(err);
        }
    }
}

module.exports = vehicleOptionController;