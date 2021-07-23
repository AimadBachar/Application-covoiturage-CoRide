const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = {

    /**
     * this express middleware hash password for new user
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     */
    hash: (req, res, next) => {

        //on recupere le mot de passe
        const {
            password
        } = req.body;

        //si il y en a pas erreur 400
        if (!password) {
            res.status(400).json("password required");
        }

        //on utilise bcrypt pour produire un hash
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) throw new Error(err.message);
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw new Error(err.message);
                req.body.password = hash;
                next();
            });
        });
    },

    /**
     * this method compare hash password with plain password
     * @param {string} password plain text password
     * @param {string} hash hash password in db
     * @returns 
     */
    compare: async (password, hash) => {

        try{
        //on compare le mot de passe en clair et le hash
        const match = await bcrypt.compare(password, hash);

            //si c'est bon on return match sinon false
            if (match) {
                return match;
            } else {
                return false;
            }
        }catch(err){
            throw new Error(err.message);
        }
    }
}

module.exports = hashPassword;