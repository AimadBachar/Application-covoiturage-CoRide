import {connect} from 'react-redux';
import Login from 'src/components/ConnexionRegistration/Login';

const mapStateToProps = () => ({
  email: "email@mail.com",
  password: "password",
  isLogged: true,
  loggedMessage: 'welcome Laurent ! '
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