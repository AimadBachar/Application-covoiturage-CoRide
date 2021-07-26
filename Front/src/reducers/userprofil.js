// 2. j'importe les actions
import {
    USER_PROFIL_INPUT_CHANGE,
    USER_PROFIL_SUCCESS,
  } from 'src/actions/user';
  import { USER_PROFIL } from 'src/actions/user';
  
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
    /* console.log(action.payload); */
    switch (action.type) {
      case USER_PROFIL_SUCCESS:
        return {
          ...state,
          profilCompletedMessage: `Profil success!`,
          completedName: action.payload.first_name,
          completed: true,
          ...action.payload,
        };

      case USER_PROFIL_INPUT_CHANGE:
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