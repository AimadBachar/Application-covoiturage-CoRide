// création des actions 
// ne pas oublier l'importation dans le reducer user.js
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const FETCH_SEARCH_CITY = 'FETCH_SEARCH_CITY';
export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS';
export const FETCH_TRAVELS = 'FETCH_TRAVELS';
export const FETCH_TRAVELS_SUCCESS = 'FETCH_TRAVELS_SUCCESS';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_ONE_TRAVEL = 'FETCH_ONE_TRAVEL';
export const SEARCH_INPUTS_COORDS = 'SEARCH_INPUTS_COORDS';


export const searchInputChange = (payload) => ({
  type: SEARCH_INPUT_CHANGE,
  payload
});

export const searchInputsCoords = (payload)=>({
  type: SEARCH_INPUTS_COORDS,
  payload
})

export const searchSubmit = () => ({
  type: SEARCH_SUCCESS,
});

export const fetchSearchCity = (payload)=>({
  type: FETCH_SEARCH_CITY,
  payload
});

export const fetchCitiesSuccess = (payload)=>({
  type: FETCH_CITIES_SUCCESS,
  payload
});

export const searchSubmitSucces = (payload) => ({
  type: SEARCH_SUBMIT_SUCCESS,
  payload
});

export const fetchTravels = () => ({ 
  type: FETCH_TRAVELS 
});

export const fetchTravelsSuccess = (payload) => ({
   type: FETCH_TRAVELS_SUCCESS, 
   payload 
});

export const fetchTravel = (payload) => ({ 
  type: FETCH_ONE_TRAVEL,
  payload
});
