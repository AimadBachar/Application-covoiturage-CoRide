import { combineReducers } from 'redux';

import trajetReducer from './trajets';
import userReducer from 'src/reducers/user.js';

const rootReducer = combineReducers({
  trajets: trajetReducer,
  user: userReducer,
});

export default rootReducer;
