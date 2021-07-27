// 2. j'importe les actions
import {
    USER_PROFIL_INPUT_CHANGE,
    USER_PROFIL_SUCCESS,
    USER_PROFIL_ACTIVITIES,
  } from 'src/actions/userprofil';
  import { USER_PROFIL } from 'src/actions/userprofil';
  
  // 1. après la création du container Login
  // j'ajoute un reducer-user.js avec de fausses datas
  // puis je modifie le state du container login avec ces fausses datas
  export const initialState = {
    completed: false,
    profilCompletedMessage: 'Profil success !',
    inputs: {
      last_name: 'sasa',
      first_name: 'lolo',
      pseudo: 'Lolo',
      email: 'lolo@sasafr',
      password: 'tatayoyo',
      birthdate: '23/02/1989',
      coords: 'hh',
      city: 'ciboure',
      postcode: '64500',
      country: 'France',
      brand: 'Peugeot',
      model: 'Expert',
      activity_id: '1',
    },
  
  };
  
  const reducer = (state = initialState, action = {}) => {
    /* console.log(action.payload); */
    switch (action.type) {
      case USER_PROFIL_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          profilCompletedMessage: `Profil Success !`,
          completed: true,
          ...action.payload,
        };

      case USER_PROFIL_INPUT_CHANGE:
        console.log(action.payload);
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.name] : action.payload,
          },
        };

       /* case USER_PROFIL_ACTIVITIES:
          console.log(action.payload);
          return {
            ...state,
            ...action.payload
          }*/

      default:
        return state;
    }
  };
  
  export default reducer;