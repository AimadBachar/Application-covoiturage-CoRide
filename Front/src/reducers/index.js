// ==> Import des Reducers
import { combineReducers } from 'redux';

import trajetsReducer from 'src/reducers/trajets.js';
import userReducer from 'src/reducers/user.js';
import usersigninReducer from 'src/reducers/usersignin.js';

import tripReducer from 'src/reducers/trip.js';

import userprofilReducer from 'src/reducers/userprofil.js';
import comboBoxCities from 'src/reducers/comboBoxCities.js';


const rootReducer = combineReducers({
  user: userReducer,
  usersignin: usersigninReducer,
  trajets: trajetsReducer,

  trip: tripReducer,

  userprofil: userprofilReducer,
  comboBoxCities: comboBoxCities
});

export default rootReducer;
