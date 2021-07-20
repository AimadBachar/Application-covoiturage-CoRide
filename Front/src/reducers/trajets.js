// 2. j'importe les actions
import {
  SEARCH_INPUT_CHANGE,
  SELECT_INPUT_CHANGE,
  DATE_INPUT_CHANGE,
  SEARCH_SUCCESS
} from 'src/actions/trajets';

import dataTags from '/src/data/data_tag.js';
import dataCards from '/src/data/data_sport.js';
// 1. après la création du container Login 
//j'ajoute un reducer-user.js avec de fausses datas
//puis je modifie le state du container login avec ces fausses datas
  export const initialState = {
    logged: false,
    cards: dataCards,
    tags: dataTags,
     inputs: {
        departure: 'Bordeaux',
        arrival: 'Quibéééron',
        sport: 'Surf',
        date: '20/08/2021',
     }
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SEARCH_SUCCESS:
        return {
          ...state,
          cards: action.payload,
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
      case SELECT_INPUT_CHANGE:
        return {
          ...state,
          inputs: {
            ...state.inputs,
            ...action.payload
          },
        };
      case DATE_INPUT_CHANGE:
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
