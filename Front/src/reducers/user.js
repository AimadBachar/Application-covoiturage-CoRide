// 2. j'importe les actions
import {
  USER_LOGOUT,
  USER_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
} from 'src/actions/user';
import { USER_LOGIN } from 'src/actions/user';


const user = JSON.parse(localStorage.getItem('tokens'));
// 1. après la création du container Login
// j'ajoute un reducer-user.js avec de fausses datas
// puis je modifie le state du container login avec ces fausses datas
export const initialState = {
  logged: false,
  loggedMessage: 'Welcome !',
  inputs: {
    id: user?.id || "",
    last_name: user?.last_name || "",
    first_name: user?.first_name || "",
    pseudo: user?.pseudo || "",
    email: user?.email || "",
    password: user?.password || "",
    birthdate: user?.birthdate ? new Date(user.birthdate).toISOString().split('T')[0] : new Date(""),
    activity_id: user?.Activity_id || "",
    activities: user?.Activities || [],
    tags: user?.tags || [],
    picture_link: user?.picture_link || "",
    travels_passenger: user?.travels_passenger || [],
    travels_driver: user?.travels_driver || [],
    biography: user?.biography || ""
  },

};

const reducer = (state = initialState, action = {}) => {
  /* console.log(action.payload); */
  switch (action.type) {
    case USER_LOGIN_SUCCESS:

      if(action.payload?.birthdate){
      action.payload.birthdate = new Date(action.payload.birthdate).toISOString().split('T')[0];
      }

      return {
        ...state,
        /* loggedMessage: `Welcome ${action.payload.first_name}!`,
        loggedName: action.payload.first_name, */
        logged: true,
        ...action.payload,
        inputs: {...action.payload}
        // ci dessus la version courte de:
        /* logged: action.payload.logged,
           user: action.payload.firstname,
         token: action.payload.token */
      };
    case USER_LOGOUT:

    localStorage.removeItem("tokens");

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
    default:
      return state;
  }
};

export default reducer;
