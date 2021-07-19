// == import axios
import axios from 'axios';
import {
    USER_LOGIN, 
    userLoginSuccess,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
    switch(action.type) {     
      case USER_LOGIN:
        axios({
          method: 'post',
          url: 'http://localhost:3001/login',
          data: store.getState().user.inputs,
        })
          .then((res) => {
            console.log(res.data);
            const actionToSend = userLoginSuccess(res.data);
            store.dispatch(actionToSend);
          })
          .catch((err) => {
            console.error(err);
          })
      break;
}
next(action);
}
   