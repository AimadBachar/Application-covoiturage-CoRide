 // == import axios
 import axios from 'axios';
 import { useLocation } from 'react-router-dom';
 
 
 
 import { 
  FETCH_USERS,
  fetchUsersSuccess
 } from '../actions/detailsProfil';
 
 
 
 export default (store) => (next) => (action) => {
   switch(action.type) {     
     case FETCH_USERS:
 
       let fetchUrl = `http://18.235.248.88:3000/api/v1/users`;

       const token = JSON.parse(localStorage.getItem("tokens"));
 
       console.log(token)

       axios({
         method: 'GET',
         headers:{
           "Authorization":`Baerer ${token.token}`
         },
         url: fetchUrl
       })
         .then((res) => {
           console.log("res.data", res.data);
           //console.log(departure);
           const actionToSend = fetchUsersSuccess(res.data);
           store.dispatch(actionToSend);
               
         })
         .catch((err) => {
           console.error(err);
         })
 
       
     break;
     
 }
 next(action);
 }
