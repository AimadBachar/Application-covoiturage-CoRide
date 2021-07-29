import { connect } from 'react-redux';
import ProfilUser from 'src/components/ProfilUser';

// == Import des actions
import {  
  userProfilInputChange,
  fetchActivities,
 } from 'src/actions/userprofil';
import { userProfilSubmit } from '../../actions/userprofil';


const mapStateToProps = (state) => ({ 
  isCompleted: state.userprofil.completed,
  profilCompletedMessage: state.userprofil.inputs.profilCompletedMessage,
  last_name: state.userprofil.inputs.last_name,
  first_name: state.userprofil.inputs.first_name,
  pseudo: state.userprofil.inputs.pseudo,
  email: state.userprofil.inputs.email,
  password: state.userprofil.inputs.password,
  birthdate: state.userprofil.inputs.birthdate,
  activity_id: state.userprofil.inputs.activity_id,
  tags: state.userprofil.tags,
  picture: state.userprofil.inputs.picture,
  /*coords: state.userprofil.inputs.coords,
  city: state.userprofil.inputs.city,
  postcode: state.userprofil.inputs.postcode,
  country: state.userprofil.inputs.country,
  brand: state.userprofil.inputs.brand,
  model: state.userprofil.inputs.model,*/
});


const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log('change in ' + name + ' :', value); 
    const action = userProfilInputChange({
      [name]: value,
    });
    dispatch(action);
  },

  // input des sports
  onInputChange: (name, value) => {
    console.log('change', name , value);
    const action = userProfilInputChange(value);
    action.name = name,
    dispatch(action)
  },

  handleFetchActivities:()=>{
    console.log("activity");
    const action = fetchActivities();
    dispatch(action);
  },

  onSubmitProfil: (value) => {
    console.log('profil completed')
    //console.log(localStorage.getItem('tokens'));
    const action = userProfilSubmit();
    dispatch(action);
  },

});  


export default connect(mapStateToProps, mapDispatchToProps)(ProfilUser);