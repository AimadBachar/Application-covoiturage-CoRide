// création des actions
// ne pas oublier l'importation dans le reducer user.js
export const USER_PROFIL_INPUT_CHANGE = 'USER_PROFIL_INPUT_CHANGE';
export const USER_PROFIL_SUBMIT = 'USER_PROFIL_SUBMIT';
export const USER_PROFIL_SUCCESS = 'USER_PROFIL_SUCCESS';
export const USER_PROFIL_ACTIVITIES = 'USER_PROFIL_ACTIVITIES';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';


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




