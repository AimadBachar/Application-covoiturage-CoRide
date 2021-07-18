
/**
 * this express middleware verifiy if token exist in session, it's ok next or error 401
 * @param {request} req 
 * @param {response} res 
 * @param {function} next 
 */
module.exports = (req,res,next)=>{

   if(req.session.user?.token){
       next();
   } else{
       res.redirect("/");
   }
}