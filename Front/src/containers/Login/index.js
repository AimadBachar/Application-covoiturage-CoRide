import { connect } from 'react-redux';
import Login from 'src/components/Login';

// import des actions
import { userInputChange, userLogin, userLogout } from 'src/actions/user';


const mapStateToProps = (state) => ({
  user: state.user.inputs.user,
  password: state.user.inputs.password,
  isLogged: state.user.logged,
  loggedMessage: state.user.loggedMessage,
  open: state.modalInfo.open,
  header: state.modalInfo.header,
  message: state.modalInfo.message
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    /* console.log(`change in ${name} :`, value); */
    // object avec nom de l'input
    // et la value de ce que tape le user

    const action = userInputChange({
      [name]: value,
    });
    dispatch(action);
  },
  handleLogin: () => {
    /* console.log('login'); */
    console.log(localStorage.getItem('tokens'));
    const action = userLogin();
    dispatch(action);
  },
  handleLogout: () => {
    /* console.log('logout'); */
    const action = userLogout();    
    dispatch(action);   
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
