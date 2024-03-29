// ==> Import des Reducers
import { combineReducers } from 'redux';

import trajetsReducer from 'src/reducers/trajets.js';
import userReducer from 'src/reducers/user.js';
import usersigninReducer from 'src/reducers/usersignin.js';

import tripReducer from 'src/reducers/trip.js';

import userprofilReducer from 'src/reducers/userprofil.js';
import comboBoxCities from 'src/reducers/comboBoxCities.js';
import detailsProfilReducer from 'src/reducers/detailsProfil.js';
import contactReducer from 'src/reducers/contact.js';
import modalInfoReducer from 'src/reducers/modalInfo.js';


const rootReducer = combineReducers({
  user: userReducer,
  usersignin: usersigninReducer,
  trajets: trajetsReducer,
  trip: tripReducer,
  userprofil: userprofilReducer,
  comboBoxCities: comboBoxCities,
  detailsProfil: detailsProfilReducer,
  contact: contactReducer,
  modalInfo: modalInfoReducer
});

export default rootReducer;
