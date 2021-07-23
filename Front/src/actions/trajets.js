// création des actions 
// ne pas oublier l'importation dans le reducer user.js
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS';
export const FETCH_TRAVELS = 'FETCH_TRAVELS';
export const FETCH_TRAVELS_SUCCESS = 'FETCH_TRAVELS_SUCCESS';


export const searchInputChange = (payload) => ({
  type: SEARCH_INPUT_CHANGE,
  payload
});

export const searchSubmit = () => ({
  type: SEARCH_SUCCESS,
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
