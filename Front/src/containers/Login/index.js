import {connect} from 'react-redux';
import Login from 'src/components/ConnexionRegistration/Login';


const mapStateToProps = (state) => ({
  email: state.user.inputs.password,
  password: state.user.inputs.password,
  isLogged: state.user.logged,
  loggedMessage: state.user.loggedMessage
});

const mapDispatchToProps = () => ({
  changeField: (value, name) => {
    console.log('change in ' + name + ' :', value);
  },
  handleLogin: () => {
    console.log('login')
  },
  handleLogout: () => {
    console.log('logout')
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);