import {
    FETCH_EMAIL_SUCCESS
  } from 'src/actions/contact';
  
    export const initialState = {
      loading: false  
    };
    
    const reducer = (state = initialState, action = {}) => {
      switch (action.type) {
  
        case FETCH_EMAIL_SUCCESS:
          console.log(action.payload);
          return{
            ...state,
            loading:true
          }
          
        default:
          return state;
      }
    };
    
    export default reducer;