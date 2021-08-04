// 2. j'importe les actions
import {
  SEARCH_INPUT_CHANGE,
  SEARCH_SUCCESS,
  SEARCH_SUBMIT_SUCCESS,
  FETCH_TRAVELS,
  FETCH_TRAVELS_SUCCESS,
  FETCH_ONE_TRAVEL,
  PARTICIPE_TRAVEL_SUCCES,
  PARTICIPE_TRAVEL,
  FETCH_PROFIL_DRIVER,
  SEARCH_FORM_DISPLAY,
  UPDATE_TRAVELS,
  DELETE_TRAVEL

} from 'src/actions/trajets';

// 1. après la création du container Login 
//j'ajoute un reducer-user.js avec de fausses datas
//puis je modifie le state du container login avec ces fausses datas
  export const initialState = {
    loading: false,
    cards: [],
    detailsCard: [],
    tags: [],
     inputs: {
        destination_city: '',
        departure_city:"",
        long:"",
        lat:"",
        activity_id: '',
        departure_timestamp: '',
     }
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SEARCH_SUCCESS:
        return {
          ...state,
        };
      case SEARCH_INPUT_CHANGE:
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.name] : action.payload,
          },
        };
      case SEARCH_SUBMIT_SUCCESS:
        /* console.log(action.payload); */
        return {
          ...state,
          cards: action.payload
        };
      case FETCH_TRAVELS:       
        return {
          ...state,
          loading: true
        };
      case FETCH_TRAVELS_SUCCESS:
        /* console.log(action.payload); */
        return {
          ...state,
          loading: false,
          cards: action.payload
      };
      case FETCH_ONE_TRAVEL:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          detailsCard: action.payload
      };
      case PARTICIPE_TRAVEL:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          detailsCard: action.payload
      };
      case PARTICIPE_TRAVEL_SUCCES:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          detailsCard: action.payload
      };
      case SEARCH_FORM_DISPLAY:
        console.log(action.payload);
        return{
          ...state,
          tags: action.payload
        };
      
      case UPDATE_TRAVELS:
         state.cards.push(action.payload);
        return{
          ...state,
        };
      
      case DELETE_TRAVEL:
      const newsTravels = state.cards.filter(card=>card.id != action.payload);
      return{
        ...state,
        cards: newsTravels
      }
 
      default:
        return state;
    }
  };
  
  export default reducer;
