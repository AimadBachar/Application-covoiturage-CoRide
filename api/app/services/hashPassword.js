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

        const {
            password
        } = req.body;

        if (!password) {
            res.status(400).json("password required");
        }

        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) throw new Error(err.message);
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw new Error(err.message);
                console.log(password)
                console.log(hash)
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
        const match = await bcrypt.compare(password, hash);

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