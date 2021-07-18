import { combineReducers } from 'redux';

// import recipesReducer from './recipes';
// import userReducer from './user';

const rootReducer = combineReducers({
//   recipes: recipesReducer,
//   user: userReducer,
});

export default rootReducer;

// const stateInitial = {
//     firstColor: '#f0f',
//    lastColor: '#00f',
//  };
 
//  export default (stateActuel = stateInitial, action = {}) => {
   
//    switch (action.type) {
//      // Dans un case (login)
//      // Si le type d'action qui a eu lieu m'intéresse
//      // Je return un nouveau state
//      default:
//        return stateActuel
//    }
//  }