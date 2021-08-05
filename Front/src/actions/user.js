// création des actions
// ne pas oublier l'importation dans le reducer user.js
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_INPUT_CHANGE = 'USER_INPUT_CHANGE';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload

});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userInputChange = (payload) => ({
  type: USER_INPUT_CHANGE,
  payload
});

export const updateUser = (payload)=>({
  type: UPDATE_USER,
  payload
})