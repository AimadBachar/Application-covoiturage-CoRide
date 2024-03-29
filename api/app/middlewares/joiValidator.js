/**
 * this function return an express middleware for check datas with JOI
 * @param {object} schema an Joi object schemma
 * @returns 
 */
function joiValidator(schema){

    return (req,res,next)=>{

        //lors du check des datas dans la requete on recherche la présence d'une erreur
        const {error} = schema.validate(req.body);
        if(error){
            res.status(400).json(error.message);
        }else{
            next();
        }
    }   
}



module.exports = joiValidator;