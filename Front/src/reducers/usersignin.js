  // 1. après la création du container Login
  // j'ajoute un reducer-user.js avec de fausses datas

import { 
  USER_SIGNIN,
  USER_SIGNIN_INPUT_CHANGE,
  USER_SIGNIN_SUBMIT,
  USER_SIGNIN_SUCCESS,
  
} from "../actions/usersignin";

  // puis je modifie le state du container signin avec ces fausses datas
  export const initialState = {
    signed: false,
    signedMessage: 'Welcome in our community',
    inputs: {
      lastname: "Sion",
      firstname: "Anna",
      user: 'anna@coride.fr',
      password: '1234',
      birthdate: "23/05/1990"
    }, 
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case USER_SIGNIN:
        return {
          ...state,
        };

     case USER_SIGNIN_INPUT_CHANGE:
       console.log(action.payload);
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
          console.log(action.payload);
          return {
            ...state,
            signedMessage: `Welcome in our community ${action.payload.firstname}!`,
            signedName: action.payload.firstname,
            signed: true,
            ...action.payload,
            // ci dessus la version courte de:
            /* logged: action.payload.logged,
               user: action.payload.firstname,
             token: action.payload.token */
          };    
      
      default:
        return state;
    }
  };
  
  export default reducer;
  