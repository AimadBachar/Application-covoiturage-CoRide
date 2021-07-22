const jwt = require("jsonwebtoken");

/**
 * this express middleware verify JWT for api access
 * @param {request} req 
 * @param {response} res 
 * @param {function} next 
 */
module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userIdinToken = decodedToken.id;

        const userId = req.body.id || req.params.id || req.params.userId;

        if (userId && userId != userIdinToken) {
            res.status(401).json("invalid user id...");
        } else {
            next();
        }
    }else{
        res.Status(401).json("invalid request...");
    }
}