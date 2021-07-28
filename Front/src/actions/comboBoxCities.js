// création des actions 
// ne pas oublier l'importation dans le reducer user.js
export const FETCH_SEARCH_CITY = 'FETCH_SEARCH_CITY';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const SEARCH_INPUTS_COORDS = 'SEARCH_INPUTS_COORDS';


export const searchInputsCoords = (payload)=>({
  type: SEARCH_INPUTS_COORDS,
  payload
})

export const fetchSearchCity = (payload)=>({
  type: FETCH_SEARCH_CITY,
  payload
});

export const fetchCitiesSuccess = (payload)=>({
  type: FETCH_CITIES_SUCCESS,
  payload
});

