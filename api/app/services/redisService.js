const redis = require("redis");
const {
    promisify
} = require("util");
const client = redis.createClient({prefix:"coride:"});

const get = promisify(client.get).bind(client);
const setex = promisify(client.setex).bind(client);
const del = promisify(client.del).bind(client);


const redisService = {

    keys: [],

    expiration: 3600,

    /**
     * this express middleware store in cache redis datas requests
     * @param {request} req 
     * @param {response} res 
     * @param {function} next 
     * @returns 
     */
    async cache(req, res, next) {

        //on récupere les données corresponant à la clef (url)
        const data = JSON.parse(await get(req.url));

        //si data alors on renvoi les datas du cache
        if (data) {
            res.json(data);
            return;
        }

        //on garde une copie de la methode json de l'objet request
        const methodJson = res.json.bind(res);

        //on affecte la propriété json de req avec une methode perso permmettant de sauvegarder en cache les données récupérer
        res.json = async (response) => {
            redisService.keys.push(req.url);
            await setex(req.url,redisService.expiration,JSON.stringify(response));

            //on répond à la requete du controller avec la méthode originale
            methodJson(response);
        };

        next();
    },

    /**
     * this express middleware flush the cache redis where request POST DELETE OR PATCH
     * @param {request} _ not use
     * @param {response} __ not use
     * @param {function} next 
     */
    async flush(_,__,next) {
  
        //on vide les clefs du cache redis présentes  dans le tableau keys
        for(const key of redisService.keys){
            await del(key);
        }
        redisService.keys.length = 0;
        next();
    }
}


module.exports = redisService;