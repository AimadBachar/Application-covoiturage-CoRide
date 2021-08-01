import { connect } from 'react-redux';
import ProfilUser from 'src/components/ProfilUser';

// == Import des actions
import {  
  userProfilInputChange,
  fetchActivities,
  userProfilSubmit,
  fetchAddActivities 
 } from 'src/actions/userprofil';

 import { activeModal } from 'src/actions/modalInfo';


const mapStateToProps = (state) => ({ 
  isCompleted: state.userprofil.completed,
  id: state.userprofil.inputs.id,
  last_name: state.userprofil.inputs.last_name,
  first_name: state.userprofil.inputs.first_name,
  pseudo: state.userprofil.inputs.pseudo,
  email: state.userprofil.inputs.email,
  password: state.userprofil.inputs.password,
  birthdate: state.userprofil.inputs.birthdate,
  activity_id: state.userprofil.inputs.activity_id,
  activities: state.userprofil.activities,
  tags: state.userprofil.tags,
  picture_link: state.userprofil.inputs.picture_link,
  travels_passenger: state.userprofil.travels_passenger,
  travels_driver: state.userprofil.travels_driver,
  biography: state.userprofil.inputs.biography,
  open: state.modalInfo.open,
  header: state.modalInfo.header,
  message: state.modalInfo.message
  /*coords: state.userprofil.inputs.coords,
  city: state.userprofil.inputs.city,
  postcode: state.userprofil.inputs.postcode,
  country: state.userprofil.inputs.country,
  brand: state.userprofil.inputs.brand,
  model: state.userprofil.inputs.model,*/
});


const mapDispatchToProps = (dispatch) => ({
  /*changeField: (value, name) => {
    console.log('change in ' + name + ' :', value); 
    const action = userProfilInputChange({
      [name]: value,
    });
    dispatch(action);
  },*/

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

  onSubmitProfil: (formData) => {
    console.log('profil completed')
    //console.log(localStorage.getItem('tokens'));
    const action = userProfilSubmit(formData);
    dispatch(action);
  },

  onSubmitActivities: ()=>{
    console.log("containers add activities");
    const action = fetchAddActivities();
    dispatch(action);
  },

  checkInputsContent: (content)=>{
    console.log("containers profiluser");
    const action = activeModal(content);
    dispatch(action);
  }

});  


export default connect(mapStateToProps, mapDispatchToProps)(ProfilUser);