import { combineReducers } from 'redux';

import trajetReducer from './trajets';
import userReducer from 'src/reducers/user.js';

const rootReducer = combineReducers({
  user: userReducer,
  trajets: trajetReducer,
});

export default rootReducer;
