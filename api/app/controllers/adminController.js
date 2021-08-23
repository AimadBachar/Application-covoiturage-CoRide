const jwt = require("jsonwebtoken");

/**
 * This function i a express middleware for login front app
 * @param {request} req 
 * @param {response} res 
 * @param {function} next 
 * @returns {JSON} return an error 401 or a JWT
 */
module.exports = (req,res,next)=>{

    const {user,password} = req.body;

    if(user === process.env.USER_FRONT && password === process.env.PASS_FRONT){

        const userId = Date.now();

        const token = jwt.sign({id: userId,admin:true}, process.env.TOKEN_SECRET);
        res.json({
            id: userId,
            token: token
        });
    } else{
        res.status(401).json("Error username or password");
    }
}