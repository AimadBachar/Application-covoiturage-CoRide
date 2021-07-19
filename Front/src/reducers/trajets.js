// 2. j'importe les actions
import {
  SEARCH_INPUT_CHANGE,
  SELECT_INPUT_CHANGE,
  DATE_INPUT_CHANGE,
  SEARCH_SUCCES
} from 'src/actions/trajets';


// 1. après la création du container Login 
//j'ajoute un reducer-user.js avec de fausses datas
//puis je modifie le state du container login avec ces fausses datas
  export const initialState = {
    logged: false,
    list: [],
    // inputs: {
    //    /* email: 'coride@app.com',
    //     password: 'FrontForLife',*/
    //     email: 'coride-laurent@app.com',
    //     password: 'laurent',
    // }
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SEARCH_SUCCES:
        return {
          ...state,
          list: action.payload,
          // ci dessus la version courte de:
          // logged: action.payload.logged,
          // pseudo: action.payload.pseudo,
          // token: action.payload.token
        };
      case SEARCH_INPUT_CHANGE:
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
