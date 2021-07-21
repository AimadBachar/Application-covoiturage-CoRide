 // == import axios
 import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Card from 'src/containers/Card';
 import { SEARCH_SUCCESS, searchSubmitSucces } from '../actions/trajets';
//route results-trajets http://18.235.248.88:3000/api/v1/travels

export default (store) => (next) => (action) => {
  switch(action.type) {     
    case SEARCH_SUCCESS:
      axios({
        method: 'GET',
        url: 'http://18.235.248.88:3000/api/v1/travels',
      })
        .then((res) => {
          console.log("res.data", res.data);
          //console.log(departure);
          const actionToSend = searchSubmitSucces(res.data);
          store.dispatch(actionToSend);
          
         
          localStorage.setItem("cards", res.data);
          const cards = localStorage.getItem("cards");
          
        })
        .catch((err) => {
          console.error(err);
        })

      
    break;
}
next(action);
}
 