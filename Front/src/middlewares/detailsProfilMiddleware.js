 // == import axios
 import axios from 'axios';
 import { useLocation } from 'react-router-dom';
 
 
 
 import { 
  FETCH_USERS,
  fetchUsersSuccess,
  FETCH_EMAIL,
  fetchEmailSuccess
 } from '../actions/detailsProfil';
 
 import { activeModal } from 'src/actions/modalInfo';
 
 export default (store) => (next) => (action) => {
   switch(action.type) {     
     case FETCH_USERS:
 
       const fetchUrl = `http://18.235.248.88:3000/api/v1/users`;

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
           const error = activeModal({
             header:"Attention",
             message:"Erreur interne..."
           });

           store.dispatch(error);
         })
 
       
     break;

     case FETCH_EMAIL:

      const user = JSON.parse(localStorage.getItem("tokens"));

      const userId = user.id;

      const datas = {
        email: action.payload.get("email"),
        recipient: action.payload.get("recipient"),
        sender: user.pseudo,
        message: action.payload.get("message")
      };

      axios({
        method: 'POST',
        headers:{
          "Authorization":`Baerer ${user.token}`,
          "Content-Type" : "application/json"
        },
        url: `http://18.235.248.88:3000/api/v1/user/${userId}/send-email`,
        data: JSON.stringify(datas)
      })
        .then((res) => {
          console.log("res.data", res.data);
        
          const actionToSend = fetchEmailSuccess(res.data);
          store.dispatch(actionToSend);
              
        })
        .catch((err) => {
          console.error(err);
        })
     
 }
 next(action);
 }
