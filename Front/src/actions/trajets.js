// création des actions 
// ne pas oublier l'importation dans le reducer user.js
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SELECT_INPUT_CHANGE = 'SELECT_INPUT_CHANGE';
export const DATE_INPUT_CHANGE = 'DATE_INPUT_CHANGE';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';


export const searchInputChange = (payload) => ({
  type: SEARCH_INPUT_CHANGE,
  payload
});

export const searchSubmit = () => ({
  type: SEARCH_SUCCESS,
});
