import {connect} from 'react-redux';
import Search from 'src/components/Search';
import { searchSubmit, searchInputChange } from 'src/actions/trajets';
// import datas


const mapStateToProps = (state) => ({
    tags: state.trajets.tags,
    departure: state.trajets.inputs.departure,
    arrival: state.trajets.inputs.arrival,
    sport: state.trajets.inputs.sport,
    date: state.trajets.inputs.date
});

const mapDispatchToProps = (dispatch) => ({  
    onInputChange: (name, value) => {
      console.log('ton lieu de pratique est', name , value);
      const action = searchInputChange(value);
      action.name = name;
      dispatch(action)
    },
    onSubmitSearch: (value) => {
      console.log('submit');
      const action = searchSubmit();
      dispatch(action)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

