// 2. j'importe les actions
import {
  USER_PROFIL_INPUT_CHANGE,
  USER_PROFIL_ACTIVITIES,
  USER_PROFIL_SUBMIT,
  USER_PROFIL_SUCCESS,
} from 'src/actions/userprofil';



const user = JSON.parse(localStorage.getItem('tokens'));
//const user = localStorage.getItem("tokens");
console.log(user);

export const initialState = {
  completed: false,
  tags: [],
  inputs: {
    picture_link: user?.picture_link,
    id: user?.id,
    last_name: user?.last_name,
    first_name: user?.first_name,
    pseudo: user?.pseudo,
    email: user?.email,
    password: user?.password,
    birthdate: user?.birthdate ? new Date(user.birthdate).toISOString().split('T')[0] : "",
    activity_id: [],
   /* coords: '',
    city: '',
    postcode: '',
    country: '',
    brand: '',
    model: '',*/
  },
};

const reducer = (state = initialState, action = {}) => {
  /* console.log(action.payload); */
  switch (action.type) {


    //les inputs sont modifiés lorque l'utilisateur
    // saisi du texte ou selectionne un sport
    case USER_PROFIL_INPUT_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        inputs: {
          ...state.inputs,
         //[action.name]: action.payload,
        ...action.payload,
        },
      };

  // affiche la liste des activités
   case USER_PROFIL_ACTIVITIES:
      console.log('reducers', action.payload);
      return {
        ...state,
        tags: action.payload,
      };

  // valider la création ou modification de profil
      case USER_PROFIL_SUBMIT:
        return {
          ...state,
          completed: false,       
        };

  // si il n'y a pas d'erreurs = success !      
      case USER_PROFIL_SUCCESS:
          console.log('success', action.payload);
          return {
            ...state,
            completed: true,
            ...action.payload,
          };

    default:
      return state;
  }
};

export default reducer;
