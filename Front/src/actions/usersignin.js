// création des actions 
// ne pas oublier l'importation dans le reducer user.js
export const USER_SIGNIN_INPUT_CHANGE = 'USER_SIGNIN_INPUT_CHANGE';
export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_SUBMIT = 'USER_SIGNIN_SUBMIT';



export const userSigninInputChange = (payload) => ({
    type: USER_SIGNIN_INPUT_CHANGE,
    payload
  });

export const userSignin = () => ({
  type: USER_SIGNIN,
});

export const userSigninSuccess = (payload) => ({
  type: USER_SIGNIN_SUCCESS,
  payload

});

export const userSigninSubmit = () => ({
  type: USER_SIGNIN_SUBMIT,
});

