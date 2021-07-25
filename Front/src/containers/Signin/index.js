import { connect } from 'react-redux';
import Signin from 'src/components/Signin';

// == Import des actions
//import {  } from 'src/actions/user';

const mapStateToProps = (state) => ({
    isSignedIn: state.usersignin.signed,
    signedMessage: state.usersignin.signedMessage,
    lastname: state.usersignin.inputs.lastname,
    firstname: state.usersignin.inputs.firstname,
    user: state.usersignin.inputs.user,
    password: state.usersignin.inputs.password,
    birthdate: state.usersignin.inputs.birthdate,
  });


  const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        console.log('change in ' + name + ' :', value);
      },

      handleSignin: () => {
        console.log('Signin')
      }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Signin);