 // == import axios
 import axios from 'axios';

 // Import des actions
 import {
   USER_SIGNIN,
   userSignin,
   
 } from 'src/actions/user';
 
 
 const middleware = (store) => (next) => (action) => {
   switch (action.type) {
    case USER_SIGNIN: 
      console.log('user-signin in middleware', action.type);

      const frm = $('#frm');
      let formData = new formData(frm);
    
      console.log("data post:",formData);

      //multipart/form-data
        axios({
          method: 'post',
          url: 'http://18.235.248.88:3000/api/v1/users',
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
           
           const action = userSignin(res.data);
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