const {Pool} = require("pg");

//on crée une instance de pool, ici pas d'information de connexion car 
//nous laissons pg récupérer ces infos dans les variables d'environnement
const pool = new Pool();

module.exports = pool;