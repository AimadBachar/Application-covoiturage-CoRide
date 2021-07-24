import {connect} from 'react-redux';
import Search from 'src/components/Search';
import { searchSubmit, searchInputChange } from 'src/actions/trajets';
// import datas


const mapStateToProps = (state) => ({
    tags: state.trajets.tags,
    departure_city: state.trajets.inputs.departure,
    destination_city: state.trajets.inputs.arrival,
    activity: state.trajets.inputs.sport,
    departure_timestamp: state.trajets.inputs.date,
    cards: state.trajets.cards
});

const mapDispatchToProps = (dispatch) => ({  
    onInputChange: (name, value) => {
      //console.log('ton lieu de pratique est', name , value);
      const action = searchInputChange(value);
      action.name = name;
      dispatch(action)
    },
    onSubmitSearch: (value) => {
      //console.log('submit');
      const action = searchSubmit();
      dispatch(action)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

