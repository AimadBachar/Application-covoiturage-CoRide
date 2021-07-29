const openCage = require("opencage-api-client");

/**
 * this express middleware expects a coty in the query string
 * @param {request} req 
 * @param {response} res 
 * @param {function} next 
 * @returns {JSON} a json contain an array of objects (city,postcode,coords)
 */
const searchCities = async (req, res, next) => {

    try {

        //on récupere les resultats de l'api externe depuis la query string de notre requete
        const datas = await openCage.geocode({
            q: req.query.city,
            countrycode: "fr",
            language:"fr",
            pretty:1
        });

        //si on a des résultats on return les résultats en gardant uniquement les infos qu'ils nous faut
        if (datas) {

            const cities = [];
            for(const city of datas.results){
                if(city.components.city || city.components.village){                
                cities.push({
                    city: city.components.city || city.components.village,
                    postcode: city.components.postcode,
                    coords: city.geometry
                })
            }}
            

            res.json(cities);

        } else {
            res.json("no results");
        }
    } catch (err) {
        next(err);
    }
}

module.exports = searchCities;