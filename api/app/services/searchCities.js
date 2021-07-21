const openCage = require("opencage-api-client");


const searchCities = async (city)=>{

    return await openCage.geocode({q: city})


}

module.exports = searchCities;
