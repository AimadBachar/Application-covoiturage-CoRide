import {
  FETCH_SEARCH_CITIES, 
  FETCH_CITIES_SUCCESS,
  SEARCH_INPUTS_COORDS
} from 'src/actions/comboBoxCities';

  export const initialState = {
    resultsFetch: [],
    loading: false, 
    departure_city: "",
    long:"",
    lat:""   
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      
   
      case FETCH_CITIES_SUCCESS:
        console.log(action.payload);
        return{
          ...state,
          loading: false,
          resultsFetch: action.payload
        };
        case SEARCH_INPUTS_COORDS:
          console.log("reducers combo",action.payload);
          return{
            ...state, 
              departure_city: action.payload.city,         
              long: action.payload.coords.lng,
              lat: action.payload.coords.lat
            
          };
        
      default:
        return state;
    }
  };
  
  export default reducer;
