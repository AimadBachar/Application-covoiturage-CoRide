import {
  FETCH_USERS_SUCCESS
} from 'src/actions/detailsProfil';

  export const initialState = {
    usersProfils: [],
    loading: false  
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      
   
      case FETCH_USERS_SUCCESS:
        console.log(action.payload);
        return{
          ...state,
          loading: true,
          usersProfils: action.payload
        };
        
      default:
        return state;
    }
  };
  
  export default reducer;
