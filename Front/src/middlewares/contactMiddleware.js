// == import axios
import axios from 'axios';

import { 
 FETCH_EMAIL,
 fetchEmailSuccess
} from '../actions/detailsProfil';

import { activeModal } from 'src/actions/modalInfo';


export default (store) => (next) => (action) => {
  switch(action.type) {     
    case FETCH_EMAIL:

     const user = JSON.parse(localStorage.getItem("tokens"));

     const userId = user.id;

     const datas = {
       email: action.payload.get("email"),
       recipient: "Administrateur",
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
         const success = activeModal({
           header:"Informations",
           message:"Félicitation! Votre message a bien été envoyé."
         });
         store.dispatch(actionToSend);
         store.dispatch(success);
             
       })
       .catch((err) => {
         console.error(err);
         const error = activeModal({
          header:"Erreur",
          message:"Votre message n'a pas été envoyé."
        });
        store.dispatch(error);
       })
    
}
next(action);
}
