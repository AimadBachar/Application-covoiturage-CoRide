import { connect } from 'react-redux';
import Signin from 'src/components/Signin';

// == Import des actions
import { 
  userSignin, 
  userSigninInputChange, 
 } from 'src/actions/usersignin';

 import { activeModal } from 'src/actions/modalInfo';

const mapStateToProps = (state) => ({
    isSignedIn: state.usersignin.signed,
    signedMessage: state.usersignin.signedMessage,
    last_name: state.usersignin.inputs.last_name,
    first_name: state.usersignin.inputs.first_name,
    pseudo: state.usersignin.inputs.pseudo,
    picture: state.usersignin.inputs.picture,
    email: state.usersignin.inputs.email,
    password: state.usersignin.inputs.password,
    verifyPassword: state.usersignin.inputs.verifyPassword,
    birthdate: state.usersignin.inputs.birthdate,
    open: state.modalInfo.open,
    header: state.modalInfo.header,
    message: state.modalInfo.message
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

      checkInputsContent:(content)=>{
        console.log("check",content)
        const action = activeModal(content);
        dispatch(action);
      }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
