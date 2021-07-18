import { connect } from 'react-redux';
import App from 'src/components/App';
// import { fetchaction} from 'src/actions/recipes';

const mapStateToProps = (state) => ({
  //loading: state.recipes.loading
});

const mapDispatchToProps = (dispatch) => ({
//   fetchRecipes: () => {
//     console.log('chercher des trajets');

//     const action = fetchRecipes();
//     dispatch(action);
// }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
