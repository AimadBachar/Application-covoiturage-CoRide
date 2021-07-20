import {connect} from 'react-redux';
import Search from 'src/components/Search';
import { searchSubmit, searchInputChange, selectInputChange, dateInputChange } from 'src/actions/trajets';
// import datas


const mapStateToProps = (state) => ({
    tags: state.trajets.tags,
    departure: state.trajets.inputs.departure,
    arrival: state.trajets.inputs.arrival,
    sport: state.trajets.inputs.sport,
    date: state.trajets.inputs.date
});

const mapDispatchToProps = (dispatch) => ({
    
    onSelectChange: (selectedSport) => {
      console.log('tu as choisi le', selectedSport);
      const action = selectInputChange;
      dispatch(action)
    },
    
    onInputChange: (placeChose) => {
      console.log('ton lieu de pratique est', placeChose);
      const action = searchInputChange;
      dispatch(action)
    },
    onDateChange: (dateSearch) => {
      console.log('la date selectionnée est le', dateSearch);
      const action = dateInputChange;
      dispatch(action)
    },
    onSubmitSearch: () => {
      console.log('submit');
      const action = searchSubmit;
      dispatch(action)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

