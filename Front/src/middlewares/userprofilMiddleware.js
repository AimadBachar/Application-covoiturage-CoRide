// == import axios
import axios from 'axios';

// Import des actions
import {
  userProfilSuccess,
  userProfilActivities,
  FETCH_ACTIVITIES,
  USER_PROFIL_SUBMIT, 
  FETCH_ADD_ACTIVITIES,
  addActivityUserSuccess,
  FETCH_DELETE_TRAVEL_PASSENGER,
  FETCH_DELETE_TRAVEL_DRIVER,
  FETCH_DELETE_USER_ACTIVITY,
  FETCH_DELETE_USER
} from 'src/actions/userprofil';

import {updateUser} from 'src/actions/user';
import { deleteTravel } from '../actions/trajets';
import { activeModal } from 'src/actions/modalInfo';
import { userLogout } from '../actions/user';



const middleware = (store) => (next) => (action) => {

  let user = JSON.parse(localStorage.getItem("tokens"));

  switch (action.type) {
// choisir les sports pratiqués
case  FETCH_ACTIVITIES:
  const id = store.getState().id;
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
          
          const action = userProfilSuccess(user);
          const success = activeModal({
            header:"Félicitation!",
            message:"Votre profil a bien été mis à jour"
          });
          store.dispatch(action);
          store.dispatch(updateUser(user));
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

        const objActivity = JSON.parse(action.payload);

        const activity = {
          id: objActivity.id
        };
        console.log("activity",objActivity)
          axios({
            method: 'POST',
            headers:{
              'Content-Type':'application/json',
              'Authorization' : `Baerer ${user.token}`
            },
            url: `http://18.235.248.88:3000/api/v1/user/${user.id}/activities`,
            data:JSON.stringify(activity)
              })
        
            .then((res) => {
              console.log('res.data', res.data);
              const action = addActivityUserSuccess(res.data);

              user.activities.push(objActivity);
              localStorage.removeItem("tokens");
              localStorage.setItem("tokens",JSON.stringify(user));


              store.dispatch(updateUser(user));
              store.dispatch(action);
        
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

            case FETCH_DELETE_TRAVEL_PASSENGER:

              const deleteTravelPassenger = {id:action.payload};
               
              console.log("token",user.token)
                axios({
                  method: 'DELETE',
                  headers:{
                    'Content-Type':'application/json',
                    'Authorization' : `Baerer ${user.token}`
                  },
                  url: `http://18.235.248.88:3000/api/v1/user/${user.id}/travels`,
                  data:JSON.stringify(deleteTravelPassenger)
                    })
              
                  .then((res) => {
                    console.log('res.data', res.data);
    
                    const success = activeModal({
                      header:"Information",
                      message:"Votre participation est annulée"
                    })

                    //on supprime le trajet en local...
                    const travels_passenger = user.travels_passenger.filter(travel=>travel.id!=deleteTravelPassenger.id);

                    user.travels_passenger = [...travels_passenger];

                    localStorage.removeItem("tokens");
                    localStorage.setItem("tokens",JSON.stringify(user));

                    store.dispatch(success);
                    store.dispatch(updateUser(user));
              
                  })
                  .catch((err) => {
                    console.error(err);
                    const error = activeModal({
                      header:"Attention",
                      message:"Nous n'avons pas réussi à supprimer votre inscription"
                    });
                    store.dispatch(error);
                  });

            break;

            case FETCH_DELETE_TRAVEL_DRIVER:

              const deleteTravelDriver = {id:action.payload};
               
              console.log("activity",activity)
                axios({
                  method: 'DELETE',
                  headers:{
                    'Content-Type':'application/json',
                    'Authorization' : `Baerer ${user.token}`
                  },
                  url: `http://18.235.248.88:3000/api/v1/travels/user/${user.id}`,
                  data:JSON.stringify(deleteTravelDriver)
                    })
              
                  .then((res) => {
                    console.log('res.data', res.data);
    
                    const success = activeModal({
                      header:"Information",
                      message:"Votre trajet est annulée"
                    });

                    //on supprime le trajet en local...
                    const travels_driver = user.travels_driver.filter(travel=>travel.id!=deleteTravelDriver.id);

                    user.travels_driver = [...travels_driver];

                    localStorage.removeItem("tokens");
                    localStorage.setItem("tokens",JSON.stringify(user));

                    store.dispatch(deleteTravel(deleteTravelDriver.id));
                    store.dispatch(updateUser(user));
                    store.dispatch(success);
              
                  })
                  .catch((err) => {
                    console.error(err);
                    const error = activeModal({
                      header:"Attention",
                      message:"Nous n'avons pas réussi à supprimer votre trajet"
                    });
                    store.dispatch(error);
                  });

            break;

            case FETCH_DELETE_USER_ACTIVITY:

              const deleteActivity = {id:action.payload};

                axios({
                  method: 'DELETE',
                  headers:{
                    'Content-Type':'application/json',
                    'Authorization' : `Baerer ${user.token}`
                  },
                  url: `http://18.235.248.88:3000/api/v1/user/${user.id}/activities`,
                  data:JSON.stringify(deleteActivity)
                    })
              
                  .then((res) => {
                    console.log('res.data', res.data);
    
                    const success = activeModal({
                      header:"Information",
                      message:"L'activité à été supprimée."
                    });

                    //on supprime le trajet en local...
                    const activities = user.activities.filter(activity=>activity.id!=deleteActivity.id);

                    user.activities = [...activities];

                    localStorage.removeItem("tokens");
                    localStorage.setItem("tokens",JSON.stringify(user));

                    store.dispatch(updateUser(user));
                    store.dispatch(success);
              
                  })
                  .catch((err) => {
                    console.error(err);
                    const error = activeModal({
                      header:"Attention",
                      message:"Nous n'avons pas réussi à supprimer votre trajet"
                    });
                    store.dispatch(error);
                  });

            break;

            case FETCH_DELETE_USER:

              const deleteUser = {id:action.payload};

              axios({
                method: 'DELETE',
                headers:{
                  'Content-Type':'application/json',
                  'Authorization' : `Baerer ${user.token}`
                },
                url: `http://18.235.248.88:3000/api/v1/users`,
                data:JSON.stringify(deleteUser)
                  })
            
                .then((res) => {
                  console.log('res.data', res.data);
  
                  const success = activeModal({
                    header:"Information",
                    message:"Votre compte est supprimé!"
                  });
  
                  store.dispatch(success);
                  store.dispatch(userLogout());
            
                })
                .catch((err) => {
                  console.error(err);
                  const error = activeModal({
                    header:"Attention",
                    message:"Nous n'avons pas réussi à supprimer votre compte..."
                  });
                  store.dispatch(error);
                });


            break;
  }
  next(action);
}
export default middleware;

