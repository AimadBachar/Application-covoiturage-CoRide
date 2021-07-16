const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{

    const {user,password} = req.body;

    if(user === process.env.USER_FRONT && password === process.env.PASS_FRONT){
        const token = jwt.sign({username: user, role: "front"}, process.env.TOKEN_SECRET);
        res.json({token});
    } else{
        res.status(401).json("Error username or password");
    }
}