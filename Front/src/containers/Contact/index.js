import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import { fetchEmail } from "src/actions/contact";

// import datas
/* import { particpeTravel, fetchProfilDriver } from 'src/actions/trajets'; */

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  email: state.userprofil.inputs.email,
  pseudo: state.userprofil.inputs.pseudo
});

const mapDispatchToProps = (dispatch) => ({
      submitEmail: (formData) => {
        console.log('submit');
        const action = fetchEmail(formData);
        dispatch(action);
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);