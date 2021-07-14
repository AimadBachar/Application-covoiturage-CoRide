const User = require("../models/User");

const userController = {

    /**
     * This method is an express middleware for get all rows in User model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {array} an array of objects User OR an Error
     */
    async getAll(req, res, next) {

        try {
            const results = await User.findAll();
            return res.json(results);
        } catch (err) {
            next(err);
        }
    },

    /**
     * This function is a express middleware for get one row in User model
     * @async
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} an object User or error 404 if id don't exist
     */
    async getOne(req, res, next) {

        try {
            const {
                id
            } = req.params;
            const result = await User.findOne(id); 
            return res.json(result);
            
        } catch (err) {
            next(err);
        }
    },

    /**
     * This method is a express middleware for insert or update one row in User model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {object} return an object modify or insert in db
     */
    async insertOrUpdate(req,res,next){

        try{
            const user = new User(req.body);
            user.picture_link = req.file.filename;

            console.log(user);

            if(user.id && parseInt(req.params.id,10) !== user.id){
                return res.status(401).json("bad request");
            }

            //const result = await user.save();
            //res.status(201).json(result);
            res.json(user);

        }catch(err){
            next(err);
        }
    },

    /**
     * This method is a express middleware for delete one row in User model
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns {null}
     */
    async delete(req,res,next){
        try{
            const {id} = req.body;
            const user = await User.findOne(id);
            if(user){
                await user.delete();
                res.status(404).end();
            }else{
                next(user);
            }

        }catch(err){
            next(err);
        }
    }
}

module.exports = userController;