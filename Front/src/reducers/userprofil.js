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

const user = JSON.parse(localStorage.getItem('tokens'));
console.log(user.pseudo);

export const initialState = {
  completed: false,
  profilCompletedMessage: 'Profil success !',
  tags: [],
  inputs: {
    last_name: user.last_name,
    first_name: user.first_name,
    pseudo: user.pseudo,
    email: user.email,
    password: '',
    birthdate: new Date(user.birthdate).toISOString().split('T')[0],
    coords: '',
    city: '',
    postcode: '',
    country: '',
    brand: '',
    model: '',
    activity_id: [],

  },

};

const reducer = (state = initialState, action = {}) => {
  /* console.log(action.payload); */
  switch (action.type) {
    case USER_PROFIL_SUCCESS:
      console.log('success', action.payload);
      return {
        ...state,
        profilCompletedMessage: 'Profil Success !',
        completed: true,
        ...action.payload,
      };

    case USER_PROFIL_INPUT_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.payload,
        },
      };

    case USER_PROFIL_ACTIVITIES:
      console.log('reducers', action.payload);
      return {
        ...state,
        tags: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
