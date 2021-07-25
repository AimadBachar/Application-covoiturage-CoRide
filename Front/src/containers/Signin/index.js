import { connect } from 'react-redux';
import Signin from 'src/components/Signin';

// == Import des actions
import { 
  userSignin, 
  userSigninInputChange, 
  userSigninSubmit,
  userSigninSuccess
 } from 'src/actions/usersignin';

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
      
      const action = userSigninInputChange({
        [name]: value,
      });
      dispatch(action);
    },

      handleSignin: () => {
        console.log('Signin')
        console.log(localStorage.getItem('tokens'));
        const action = userSignin();
        dispatch(action);
      },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Signin);