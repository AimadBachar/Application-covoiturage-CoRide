import { connect } from 'react-redux';
import Signin from 'src/components/Signin';

// == Import des actions
//import {  } from 'src/actions/user';

const mapStateToProps = (state) => ({
    isSignedIn: false,
    signedMessage: "Signin done !",
    lastname: "nom",
    firstname: "prénom",
    user: "lolo@sasa.fr",
    password: "password",
    birthdate: "00/00/0000",
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