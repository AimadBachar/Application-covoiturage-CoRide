 // == import axios
 import axios from 'axios';

 // Import des actions
 import {
   USER_SIGNIN,
   userSigninSubmit,
   USER_SIGNIN_SUCCESS,
   userSigninSuccess,
   
 } from 'src/actions/user';
 
 // export default (store) => (next) => (action) => {
 const middleware = (store) => (next) => (action) => {
   switch (action.type) {
    case USER_SIGNIN_SUCCESS:

    const inputs = store.getState().users.inputs;
    console.log(inputs);
    
    axios({
        method: 'GET',
        url: "http://18.235.248.88:3000/api/v1/users"
    })
    .then((res) => {
        console.log("res.data", res.data);
        const actionToSend = signinSubmitSuccess(res.data);
        store.dispatch(actionToSend);
        
      })
      .catch((err) => {
        console.error(err);
      })
    
     break;
     case USER_SIGNIN:  
    //multipart/form-data
       axios({
         method: 'post',
         url: 'http://18.235.248.88:3000/api/v1/users',
       })
         .then((res) => {
           console.log('signin_success', res.data);
           const action = userSigninSuccess(res.data);
           store.dispatch(action);
           //const tokens = await connect(user, password);        
           localStorage.clear();
           localStorage.setItem('tokens', JSON.stringify(res.data));          
         })
         .catch((err) => {
           console.error(err);
         })
       break;    
   }
   next(action);
 };
 export default middleware;