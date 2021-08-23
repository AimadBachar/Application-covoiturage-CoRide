// 2. j'importe les actions
import {
  USER_PROFIL_INPUT_CHANGE,
  USER_PROFIL_ACTIVITIES,
  USER_PROFIL_SUBMIT,
  USER_PROFIL_SUCCESS,
  ADD_ACTIVITY_USER_SUCCESS,
  DISPLAY_PASSENGERS
} from 'src/actions/userprofil';

const user = JSON.parse(localStorage.getItem('tokens'));

export const initialState = {
  completed: false,

  tags: [],
  activities: user?.activities,
  travels_passenger: user?.travels_passenger,
  travels_driver: user?.travels_driver,
  inputs: {
    ...user
  },
};

const reducer = (state = initialState, action = {}) => {

  switch (action.type) {


    //les inputs sont modifiés lorque l'utilisateur
    // saisi du texte ou selectionne un sport
    case USER_PROFIL_INPUT_CHANGE:
      return {
        ...state,
        inputs: {   
         [action.name]: action.payload,
        },
      };

  // affiche la liste des activités
   case USER_PROFIL_ACTIVITIES:
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

          if(action.payload?.birthdate){
            action.payload.birthdate = new Date(action.payload.birthdate).toISOString().split('T')[0];
            }

          return {
            ...state,
            completed: true,
            inputs:{...action.payload},
          };

      case ADD_ACTIVITY_USER_SUCCESS:
          return{
            ...state,
            ...action.payload
          };

      break;

    default:
      return state;
  }
};

export default reducer;
