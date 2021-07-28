// création des actions 
// Vers Search/Card
=======

// ne pas oublier l'importation dans le reducer user.js

export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_SUBMIT_SUCCESS = 'SEARCH_SUBMIT_SUCCESS';
export const FETCH_TRAVELS = 'FETCH_TRAVELS';
export const FETCH_TRAVELS_SUCCESS = 'FETCH_TRAVELS_SUCCESS';
//Vers DetailsCard
export const FETCH_ONE_TRAVEL = 'FETCH_ONE_TRAVEL';

export const PARTICIPE_TRAVEL = 'PARTICIPE_TRAVEL';
export const PARTICIPE_TRAVEL_SUCCES = 'PARTICIPE_TRAVEL_SUCCES';
export const FETCH_PROFIL_DRIVER = 'FETCH_PROFIL_DRIVER';


export const SEARCH_FORM_DISPLAY = 'SEARCH_FORM_DISPLAY';


export const searchInputChange = (payload) => ({
  type: SEARCH_INPUT_CHANGE,
  payload
});

export const fetchTravelsSuccess = (payload)=>({
  type: FETCH_TRAVELS_SUCCESS,
  payload
})

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

export const fetchTravel = (payload) => ({ 
  type: FETCH_ONE_TRAVEL,
  payload
});


export const particpeTravel = (payload) => ({ 
  type: PARTICIPE_TRAVEL,
  payload
});

export const particpeTravelSucces = (payload) => ({ 
  type: PARTICIPE_TRAVEL_SUCCES,
  payload
});

export const fetchProfilDriver = (payload) => ({ 
  type: FETCH_PROFIL_DRIVER,
  payload
});

export const searchFormDisplay = (payload)=>({
  type: SEARCH_FORM_DISPLAY,
  payload
})

