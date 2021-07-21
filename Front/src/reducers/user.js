// 2. j'importe les actions
import {
  USER_LOGOUT,
  USER_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
} from 'src/actions/user';
import { USER_LOGIN } from 'src/actions/user';

// 1. après la création du container Login
// j'ajoute un reducer-user.js avec de fausses datas
// puis je modifie le state du container login avec ces fausses datas
export const initialState = {
  logged: false,
  loggedMessage: 'Welcome !',
  inputs: {
    // mail pour tester
    /*
        email: 'coride-anna@app.com',
        password: 'anna',
       */
    // user: 'laurent@savarit.fr',
    // password: '1234',
  },

};

const reducer = (state = initialState, action = {}) => {
  console.log(action.payload);
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedMessage: `Welcome ${action.payload.firstName}!`,
        loggedName: action.payload.firstName,
        logged: true,
        ...action.payload,
        // ci dessus la version courte de:
        /* logged: action.payload.logged,
           user: action.payload.firstname,
         token: action.payload.token */
      };
    case USER_LOGOUT:
      return {
        ...state,
        logged: false,
       // ...action.localeStorage.clear();
      };
    case USER_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
