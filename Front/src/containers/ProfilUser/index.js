import { connect } from 'react-redux';
import ProfilUser from 'src/components/ProfilUser';

// == Import des actions
import { 
  userProfil, 
  userProfilInputChange, 
 } from 'src/actions/userprofil';

const mapStateToProps = (state) => ({ 

    isCompleted: state.userprofil.completed,
    profilCompletedMessage: state.userprofil.inputs.profilCompletedMessage,
    last_name: state.userprofil.inputs.last_name,
    first_name: state.userprofil.inputs.first_name,
    pseudo: state.userprofil.inputs.pseudo,
    email: state.userprofil.inputs.email,
    password: state.userprofil.inputs.password,
    birthdate: state.userprofil.inputs.birthdate,
    coords: state.userprofil.inputs.coords,
    city: state.userprofil.inputs.city,
    postcode: state.userprofil.inputs.postcode,
    country: state.userprofil.inputs.country,
    brand: state.userprofil.inputs.brand,
    model: state.userprofil.inputs.model,
    activity_id: state.userprofil.inputs.activity_id,
    //picture: state.usersignin.inputs.picture,

});
const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        console.log('change in ' + name + ' :', value);
      
        const action = userProfilInputChange({
          [name]: value,
        });
        dispatch(action);
    },

      handleProfil: (event) => {
        console.log('profil completed')
       // console.log(localStorage.getItem('tokens'));
        const action = userProfil(event);
        dispatch(action);
      },
      });  


export default connect(mapStateToProps, mapDispatchToProps)(ProfilUser);