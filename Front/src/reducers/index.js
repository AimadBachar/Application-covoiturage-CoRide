import { combineReducers } from 'redux';


import userReducer from 'src/reducers/user.js';

const rootReducer = combineReducers({

  user: userReducer,
});

export default rootReducer;
