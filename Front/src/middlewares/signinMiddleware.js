 // == import axios
 import axios from 'axios';

 // Import des actions
 import {
   USER_SIGNIN,
   userSigninSuccess,
   
 } from 'src/actions/usersignin';
 
 
 const middleware = (store) => (next) => (action) => {
   switch (action.type) {
    case USER_SIGNIN: 
      console.log('user-signin in middleware', action.type);

      console.log(action);

 
      const formData = new FormData(action.payload);
    
      for(const key of formData.entries()){
      console.log(`${key[0]}:${key[1]}`);
      }


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
           
           //const tokens = await connect(user, password);        
           localStorage.clear();
           localStorage.setItem('tokens', JSON.stringify(res.data));  
           
           const action = userSigninSuccess(res.data);
           store.dispatch(action);
         })
         .catch((err) => {
           console.error(err);
         })
       break; 
     
   }
   next(action);
 };
 export default middleware;
