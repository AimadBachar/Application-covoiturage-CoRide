// == import axios
import axios from 'axios';

// Import des actions
import {
  userProfilSuccess,
  userProfilActivities,
  FETCH_ACTIVITIES,
  USER_PROFIL_SUBMIT, 
  FETCH_ADD_ACTIVITIES,
  addActivityUserSuccess
} from 'src/actions/userprofil';

import { activeModal } from 'src/actions/modalInfo';



const middleware = (store) => (next) => (action) => {
  switch (action.type) {
// choisir les sports pratiqués
case  FETCH_ACTIVITIES:
  const id = store.getState().id;
  console.log(id);
  // Je lance la requête
  axios({
    method: 'get',
    url: 'http://18.235.248.88:3000/api/v1/activities'
      })

    .then((res) => {
      console.log('res.data', res.data);
      const action = userProfilActivities(res.data);
      //const action
      store.dispatch(action)

    })
    .catch((err) => {
      console.error(err);
    });
  break;  


   case USER_PROFIL_SUBMIT: 
     console.log('user-profil in middleware', action.type);
     console.log(action);
   
     const datas = action.payload;

     let user = JSON.parse(localStorage.getItem("tokens"));

     
     /*const axiosConfigured = axios.create({
      headers: {'Authorization': `Bearer ${action.payload.token}`}
    }); */
       axios({
         method: 'PATCH',
         url: `http://18.235.248.88:3000/api/v1/user/${user.id}`,
         data: datas,
         headers: {
           'Content-Type': 'multipart/form-data',
           'Authorization': `Bearer ${user.token}`
         },
         })

        .then((res) => {
          console.log('profil_completed_success', res.data);
          
          user = {...user,...res.data};
          // enlever la clef
          localStorage.removeItem('tokens');
          localStorage.setItem('tokens', JSON.stringify(user));  
          
          const action = userProfilSuccess(res.data);
          const success = activeModal({
            header:"Félicitation!",
            message:"Votre profil a bien été mis à jour"
          });
          store.dispatch(action);
          store.dispatch(success);
        })
        .catch((err) => {
          console.error(err);
          const error = activeModal({
            header:"Attention",
            message:"Nous n'avons pas pu mettre à jour votre profil."
          });
          store.dispatch(error);
        });
        break;

        case FETCH_ADD_ACTIVITIES:

        const {token, id:userId} = JSON.parse(localStorage.getItem("tokens"));
        const activityId = store.getState().userprofil.inputs.activity_id;

        const activity = {
          id: activityId
        };
        console.log("activity",activity)
          axios({
            method: 'POST',
            headers:{
              'Content-Type':'application/json',
              'Authorization' : `Baerer ${token}`
            },
            url: `http://18.235.248.88:3000/api/v1/user/${userId}/activities`,
            data:JSON.stringify(activity)
              })
        
            .then((res) => {
              console.log('res.data', res.data);
              const action = addActivityUserSuccess(res.data);
              const success = activeModal({
                header:"Félicitation",
                message:"L'activitée a bien été ajoutée!"
              })
              store.dispatch(action);
              store.dispatch(success);
        
            })
            .catch((err) => {
              console.error(err);
              const error = activeModal({
                header:"Attention",
                message:"Nous n'avons pas ajouter cette activitée car elle est déjà présente dans votre liste"
              });
              store.dispatch(error);
            });

            break;
  }
  next(action);
}
export default middleware;

