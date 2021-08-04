// création des actions
// ne pas oublier l'importation dans le reducer user.js
export const USER_PROFIL_INPUT_CHANGE = 'USER_PROFIL_INPUT_CHANGE';
export const USER_PROFIL_SUBMIT = 'USER_PROFIL_SUBMIT';
export const USER_PROFIL_SUCCESS = 'USER_PROFIL_SUCCESS';
export const USER_PROFIL_ACTIVITIES = 'USER_PROFIL_ACTIVITIES';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_ADD_ACTIVITIES = 'FETCH_ADD_ACTIVITIES';
export const ADD_ACTIVITY_USER_SUCCESS ='ADD_ACTIVITY_USER_SUCCESS';
export const FETCH_DELETE_TRAVEL_PASSENGER = 'FETCH_DELETE_TRAVEL_PASSENGER';
export const FETCH_DELETE_TRAVEL_DRIVER = 'FETCH_DELETE_TRAVEL_DRIVER';
export const FETCH_DELETE_USER_ACTIVITY = 'FETCH_DELETE_USER_ACTIVITY';
export const FETCH_DELETE_USER = 'FETCH_DELETE_USER';

// valider la création ou la modification du profil
export const userProfilSubmit = (payload) => ({
  type: USER_PROFIL_SUBMIT,
  payload
});

export const userProfilInputChange = (payload) => ({
  type: USER_PROFIL_INPUT_CHANGE,
  payload
});


export const userProfilSuccess = (payload) => ({
  type: USER_PROFIL_SUCCESS,
  payload

});

export const fetchActivities = (payload)=>({
  type: FETCH_ACTIVITIES,
  payload
});

export const userProfilActivities = (payload) => ({
  type: USER_PROFIL_ACTIVITIES,
  payload
});

export const fetchAddActivities = (payload)=> ({
  type: FETCH_ADD_ACTIVITIES,
  payload
})

export const addActivityUserSuccess = (payload)=>({
  type: ADD_ACTIVITY_USER_SUCCESS,
  payload
})

export const fetchDeleteTravelPassenger = (payload)=>({
  type: FETCH_DELETE_TRAVEL_PASSENGER,
  payload
})

export const fetchDeleteTravelDriver = (payload)=>({
  type: FETCH_DELETE_TRAVEL_DRIVER,
  payload
})

export const fetchDeleteUserActivity = (payload)=>({
  type:FETCH_DELETE_USER_ACTIVITY,
  payload
})

export const fetchDeleteUser = (payload)=>({
  type: FETCH_DELETE_USER,
  payload
})


