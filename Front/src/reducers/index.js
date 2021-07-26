// ==> Import des Reducers
import { combineReducers } from 'redux';

import trajetsReducer from 'src/reducers/trajets.js';
import userReducer from 'src/reducers/user.js';
import usersigninReducer from 'src/reducers/usersignin.js';
import userprofilReducer from 'src/reducers/userprofil.js';

const rootReducer = combineReducers({
  user: userReducer,
  usersignin: usersigninReducer,
  trajets: trajetsReducer,
  userprofil: userprofilReducer,
});

export default rootReducer;
