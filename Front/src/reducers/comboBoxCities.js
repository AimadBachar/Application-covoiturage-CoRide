import {
  FETCH_SEARCH_CITIES, 
  FETCH_CITIES_SUCCESS,
  SEARCH_INPUTS_COORDS
} from 'src/actions/comboBoxCities';

  export const initialState = {
    resultsFetch: [],
    loading: false, 
    name:"",
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
          name: action.payload.name,
          resultsFetch: action.payload.cities
        };
        case SEARCH_INPUTS_COORDS:
          console.log("reducers combo",action.payload);
          if(state.name ==="departure_city"){
          return{
            ...state, 
              [state.name]: action.payload.city,         
              long: action.payload.coords.lng,
              lat: action.payload.coords.lat           
          };
        }else{
          if(state.name){
          return{
            ...state, 
              [state.name]: action.payload.city          
          };
        }}
        
      default:
        return state;
    }
  };
  
  export default reducer;
