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

        const datas = await openCage.geocode({
            q: req.query.city,
            countrycode: "fr"
        });

        if (datas) {

            const cities = datas.results.map(city => {
                return {
                    city: city.components.city || city.components.village,
                    postcode: city.components.postcode,
                    coords: city.geometry
                }
            });

            res.json(cities);

        } else {
            res.json("no results");
        }
    } catch (err) {
        next(err);
    }
}

module.exports = searchCities;