// ==> Import des Reducers
import { combineReducers } from 'redux';

import trajetsReducer from './trajets.js';
import userReducer from 'src/reducers/user.js';
import usersigninReducer from 'src/reducers/usersignin.js';


const rootReducer = combineReducers({
  user: userReducer,
  usersignin: usersigninReducer,
  trajets: trajetsReducer,
  //profiluser: profiluserReducer,
});

export default rootReducer;
