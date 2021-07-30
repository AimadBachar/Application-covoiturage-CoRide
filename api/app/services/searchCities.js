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
            language: "fr",
            pretty: 1
        });

        //si on a des résultats on return les résultats en gardant uniquement les infos qu'ils nous faut
        if (datas) {

            const cities = [];
            for (const city of datas.results) {

                //on précise les emplacements possible de ville
                const cityAvailable = city.components.city 
                    || city.components.village 
                    || city.components.town 
                    || city.components.municipality;

                //on check si elle n'est pas déja présente dans le tableau de résultats...
                const check = cities.find(index=>index.city === cityAvailable);                    

                //si non alors on push dans le tableau
                if (!check) {
                    cities.push({
                        city: cityAvailable,
                        postcode: city.components.postcode || city.components.county,
                        coords: city.geometry
                    })
                }
            }

            res.json(cities);

        } else {
            res.json("no results");
        }
    } catch (err) {
        next(err);
    }
}

module.exports = searchCities;