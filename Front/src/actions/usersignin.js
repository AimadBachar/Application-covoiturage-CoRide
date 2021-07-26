// création des actions 
// ne pas oublier l'importation dans le reducer user.js
export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNIN_INPUT_CHANGE = 'USER_SIGNIN_INPUT_CHANGE';
export const USER_SIGNIN_SUBMIT = 'USER_SIGNIN_SUBMIT';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';



// l'utilisateur
export const userSignin = (payload) => ({
    type: USER_SIGNIN,
    payload
  });
// informations de l'utilisateur
export const userSigninInputChange = (payload) => ({
    type: USER_SIGNIN_INPUT_CHANGE,
    payload
  });

// valider l inscription
export const userSigninSubmit = () => ({
  type: USER_SIGNIN_SUBMIT,
});

// si les conditions sont respectées
// âge + 18 ans
// hash password ok
export const userSigninSuccess = (payload) => ({
    type: USER_SIGNIN_SUCCESS,
    payload
  
  });

