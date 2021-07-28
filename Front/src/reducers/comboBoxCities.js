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
              long: action.payload.lng,
              lat: action.payload.lat
            
          };
        
      default:
        return state;
    }
  };
  
  export default reducer;
