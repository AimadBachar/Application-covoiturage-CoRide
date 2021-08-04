  // 1. après la création du container Login
  // j'ajoute un reducer-user.js avec de fausses datas

import { 
  USER_SIGNIN_INPUT_CHANGE,
  USER_SIGNIN_SUBMIT,
  USER_SIGNIN_SUCCESS, 
} from "../actions/usersignin";
import { USER_SIGNIN } from 'src/actions/usersignin';

const user = localStorage.getItem("tokens");

  // puis je modifie le state du container signin avec ces fausses datas
  export const initialState = {
    signed: false,
    signedMessage: 'Welcome in our community',
    inputs: {
      picture: '',
      last_name: '',
      first_name: '',
      pseudo: '',
      email: '',
      password: '',
      verifyPassword:'',
      birthdate: '',
    }, 
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {


     case USER_SIGNIN_INPUT_CHANGE:
        return {
          ...state,
           inputs: {
           ...state.inputs,
            ...action.payload,
          },
        };

    
      case USER_SIGNIN_SUBMIT:
        return {
          ...state,
          signed: false,       
        };

        case USER_SIGNIN_SUCCESS:
          return {
            ...state,
            signedMessage: `Welcome in our community ${action.payload.first_name}!`,
            signedName: action.payload.first_name,
            signed: true,
            ...action.payload,
          };    
      
      default:
        return state;
    }
  };
  
  export default reducer;
  