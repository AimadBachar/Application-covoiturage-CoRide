// == import axios
import axios from 'axios';

// Import des actions
import {
  userProfilSuccess,
  userProfilActivities,
  FETCH_ACTIVITIES,
  USER_PROFIL_SUBMIT, 
} from 'src/actions/userprofil';



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

     const user = JSON.parse(localStorage.getItem("tokens"));

     for(const key of datas.entries()){
     console.log(`${key[0]}:${key[1]}`);
     };

     console.log("user",user)
     
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
          
          // enlever la clef
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

