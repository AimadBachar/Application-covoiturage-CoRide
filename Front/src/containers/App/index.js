import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchTravels} from 'src/actions/trajets';

const mapStateToProps = (state) => ({
  loading: state.trajets.loading
});

const mapDispatchToProps = (dispatch) => ({
    fetchTravels: () => {
        console.log('chercher des trajets');

        const action = fetchTravels();
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
