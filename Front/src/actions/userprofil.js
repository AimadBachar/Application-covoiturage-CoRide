// création des actions
// ne pas oublier l'importation dans le reducer user.js
export const USER_PROFIL = 'USER_PROFIL';
export const USER_PROFIL_INPUT_CHANGE = 'USER_PROFIL_INPUT_CHANGE';
export const USER_PROFIL_SUCCESS = 'USER_PROFIL_SUCCESS';
export const USER_PROFIL_ACTIVITIES = 'USER_PROFIL_ACTIVITIES';

export const userProfil = () => ({
  type: USER_PROFIL,
});

export const userProfilSuccess = (payload) => ({
  type: USER_PROFIL_SUCCESS,
  payload

});


export const userProfilInputChange = (payload) => ({
  type: USER_PROFIL_INPUT_CHANGE,
  payload
});

export const userProfilActivities = (payload) => ({
  type: USER_PROFIL_ACTIVITIES,
  payload
})