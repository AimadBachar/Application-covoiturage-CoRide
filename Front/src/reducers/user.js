// 2. j'importe les actions
import {
  USER_LOGOUT,
  USER_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
} from 'src/actions/user';
import { USER_LOGIN } from 'src/actions/user';

// 1. après la création du container Login 
//j'ajoute un reducer-user.js avec de fausses datas
//puis je modifie le state du container login avec ces fausses datas
  export const initialState = {
    logged: false,
    loggedMessage: 'Welcome Laurent !',
    inputs: {
       /* email: 'coride@app.com',
        password: 'FrontForLife',*/
        email: 'coride-laurent@app.com',
        password: 'laurent',
    }
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          loggedMessage: `Bienvenue ${action.payload.pseudo}!`,
          ...action.payload,
          // ci dessus la version courte de:
          // logged: action.payload.logged,
          // pseudo: action.payload.pseudo,
          // token: action.payload.token
        };
      case USER_LOGOUT:
        return {
          ...state,
          logged: false,
        };
      case USER_INPUT_CHANGE:
        return {
          ...state,
          inputs: {
            ...state.inputs,
            ...action.payload
          },
        };
      default:
        return state;
    }
  };
  
  export default reducer;