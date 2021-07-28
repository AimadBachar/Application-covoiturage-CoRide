 // == import axios
 import axios from 'axios';
 import { useLocation } from 'react-router-dom';
 
 
 
 import { 
  FETCH_SEARCH_CITY,
  fetchCitiesSuccess
 } from '../actions/comboBoxCities';
 
 
 
 export default (store) => (next) => (action) => {
   switch(action.type) {     
     case FETCH_SEARCH_CITY:
 
       console.log("middleware",action.payload);
       let fetchUrl = `http://18.235.248.88:3000/api/v1/cities?city=${action.payload}`;
 
       axios({
         method: 'GET',
         url: fetchUrl
       })
         .then((res) => {
           console.log("res.data", res.data);
           //console.log(departure);
           const actionToSend = fetchCitiesSuccess(res.data);
           store.dispatch(actionToSend);
               
         })
         .catch((err) => {
           console.error(err);
         })
 
       
     break;
     
 }
 next(action);
 }
