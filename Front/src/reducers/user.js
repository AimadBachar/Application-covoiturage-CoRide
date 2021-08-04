// 2. j'importe les actions
import {
  USER_LOGOUT,
  USER_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
  UPDATE_USER
} from 'src/actions/user';
import { USER_LOGIN } from 'src/actions/user';

let user = JSON.parse(localStorage.getItem('tokens'));
if(user?.birthdate){
  user.birthdate = new Date(user.birthdate).toISOString().split('T')[0];
  }

export const initialState = {
  logged: false,
  loggedMessage: 'Welcome !',
  inputs: {
    ...user
  },

};

const reducer = (state = initialState, action = {}) => {
  /* console.log(action.payload); */
  switch (action.type) {
    case USER_LOGIN_SUCCESS:

      if(action.payload?.birthdate){
      action.payload.birthdate = new Date(action.payload.birthdate).toISOString().split('T')[0];
      }

      console.log("login success payload",action.payload)

      return {
        ...state,
        /* loggedMessage: `Welcome ${action.payload.first_name}!`,
        loggedName: action.payload.first_name, */
        logged: true,
        inputs: {...action.payload,...user}
        // ci dessus la version courte de:
        /* logged: action.payload.logged,
           user: action.payload.firstname,
         token: action.payload.token */
      };
    case USER_LOGOUT:

    localStorage.removeItem("tokens");

    user = {};

      return {
        ...state,
        inputs:{},
        logged: false
      };
    case USER_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };

      case UPDATE_USER:
        console.log(action.payload)
        return{
          ...state,
          inputs:{
            ...action.payload
          }
        }
    default:
      return state;
  }
};

export default reducer;
