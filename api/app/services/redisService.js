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

    async cache(req, res, next) {

        const data = JSON.parse(await get(req.url));

        if (data) {
            res.json(data);
            return;
        }
        const methodJson = res.json.bind(res);

        res.json = async (response) => {
            redisService.keys.push(req.url);
            await setex(req.url,redisService.expiration,JSON.stringify(response));
            methodJson(response);
        };

        next();
    },

    async flush(_,__,next) {
        console.log(redisService.keys)
        for(const key of redisService.keys){
            await del(key);
        }
        redisService.keys.length = 0;
        next();
    }
}


module.exports = redisService;