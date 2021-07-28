// == import axios
import axios from 'axios';

// Import des actions
import {
  USER_PROFIL,
  userProfilSuccess,
  USER_PROFIL_ACTIVITIES,
  userProfilActivities,
  FETCH_ACTIVITIES
  
} from 'src/actions/userprofil';



const middleware = (store) => (next) => (action) => {
  switch (action.type) {
// choisir les sports pratiqués
case FETCH_ACTIVITIES:
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
      store.dispatch(action);

    })
    .catch((err) => {
      console.error(err);
    });
  break;  


   case USER_PROFIL: 
     console.log('user-profil in middleware', action.type);
     console.log(action);

     const formData = new FormData(action.payload);
   
     for(const key of formData.entries()){
     console.log(`${key[0]}:${key[1]}`);
     };
     /*const axiosConfigured = axios.create({
      headers: {'Authorization': `Bearer ${action.payload.token}`}
    }); */
       axios({
         method: 'post',
         url: 'http://18.235.248.88:3000/api/v1/users',
         data: formData, 
         data: store.getState().user.inputs,
         headers: {
           'Content-Type': 'multipart/form-data'
         },
         })

        .then((res) => {
          console.log('profil_completed_success', res.data);
                  
          localStorage.clear();
          localStorage.setItem('tokens', JSON.stringify(res.data));  
          
          const action = userProfilSuccess(res.data);
          store.dispatch(action);
        })
        .catch((err) => {
          console.error(err);
        });
        break;

  }
  next(action);
}
export default middleware;

