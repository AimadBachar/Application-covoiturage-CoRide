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
    last_name: state.usersignin.inputs.last_name,
    first_name: state.usersignin.inputs.first_name,
    pseudo: state.usersignin.inputs.pseudo,
    email: state.usersignin.inputs.email,
    password: state.usersignin.inputs.password,
   //password: state.userSignin.inputs.password,
    birthdate: state.usersignin.inputs.birthdate,
    //picture: state.usersignin.inputs.picture,
  });


  const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        console.log('change in ' + name + ' :', value);
      
      const action = userSigninInputChange({
        [name]: value,
      });
      dispatch(action);
    },

      handleSignin: (event) => {
        console.log('Signin')
        const action = userSignin(event);
        console.log(action);
        dispatch(action);

      },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
