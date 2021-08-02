// == import axios
import axios from 'axios';



 // Import des actions
 import {
   USER_SIGNIN,
   userSigninSuccess,
   
 } from 'src/actions/usersignin';

 import { activeModal } from 'src/actions/modalInfo';
 
 
 const middleware = (store) => (next) => (action) => {
   switch (action.type) {
    case USER_SIGNIN: 

      const formData = new FormData(action.payload);
    


      //multipart/form-data
        axios({
          method: 'post',
          url: 'http://18.235.248.88:3000/api/v1/users',
          //upload,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
          })

         .then((res) => {
           console.log('signin_success', res.data);
           
           // j efface
           localStorage.removeItem('tokens');

           const success = activeModal({
             header:"Félicitation!",
             message:`Bienvenue dans la communauté! Merci de vous connecter`
           });

           const action = userSigninSuccess(res.data);

           store.dispatch(action);
           store.dispatch(success);

          
         })
         .catch((err) => {
           console.error(err);
           const error = activeModal({
             header:"Erreur",
             message:"Une erreur est arrivée, merci de recommencer..."
           });
           store.dispatch(error);
         })
       break; 
     
   }
   next(action);
 };
 export default middleware;



 /* 
    try {
      axios({
      method: 'post',
      url: 'http://18.235.248.88:3000/api/v1/users',
    })
      .then(function(response) {
        alert(response.data.message);
        console.log("check response ==>", response);
      })
        //setData(response.data.response);
        .catch(function(error) {
          console.log("check error ==>", error);
        })
        .then(function() {
          console.log("check executed ==>");
        });
      } catch (err) {
        alert(err);
      }      


 */
