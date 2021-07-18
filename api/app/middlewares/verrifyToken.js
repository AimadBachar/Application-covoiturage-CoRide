const jwt = require("jsonwebtoken");

/**
 * this express middleware verify JWT for api access
 * @param {request} req 
 * @param {response} res 
 * @param {function} next 
 */
module.exports = (req,res,next)=>{

    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.TOKEN_SECRET, (err, user)=>{

            if(err){
                return res.status(403).end();
            }
            req.user = user;
            next();
        });
    }else{
        res.status(401).end();
    }
};