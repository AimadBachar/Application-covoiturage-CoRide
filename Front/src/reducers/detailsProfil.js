import {
  FETCH_USERS_SUCCESS,
  FETCH_EMAIL_SUCCESS
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
