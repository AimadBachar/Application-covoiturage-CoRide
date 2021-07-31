import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchTravels } from 'src/actions/trajets';
import { userLoginSuccess } from 'src/actions/user';

const mapStateToProps = (state) => ({
  loading: state.trajets.loading,
  cards: state.trajets.cards,
  open: state.modalInfo.open,
  header: state.modalInfo.header,
  message: state.modalInfo.message
});

const mapDispatchToProps = (dispatch) => ({
    fetchTravels: () => {
        /* console.log('chercher des trajets'); */

        const action = fetchTravels();
        dispatch(action);
    },
    isLogged: () => {
      /* console.log('chercher des trajets'); */

      const action = userLoginSuccess();
      dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
