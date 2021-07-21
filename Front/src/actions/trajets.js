// création des actions 
// ne pas oublier l'importation dans le reducer user.js
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS';


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
