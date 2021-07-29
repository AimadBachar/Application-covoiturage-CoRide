import { connect } from 'react-redux';
import Contact from 'src/components/Contact';

// import datas
/* import { particpeTravel, fetchProfilDriver } from 'src/actions/trajets'; */

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: (name, value) => {
        console.log('ton lieu de pratique est', name , value);
        /* const action = searchInputChange(value);
        action.name = name; */
        /* dispatch(action) */
      },
      onSubmitSearch: (value) => {
        console.log('submit');
      /*   const action = searchSubmit();
        dispatch(action) */
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);