
function joiValidator(schema){

    return (req,res,next)=>{

        const {error} = schema.validate(req.body);
        if(error){
            res.status(400).json(error.message);
        }else{
            next();
        }
    }   
}



module.exports = joiValidator;