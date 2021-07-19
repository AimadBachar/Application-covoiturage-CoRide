import {connect} from 'react-redux';
import Search from 'src/components/Search';
import { searchSubmit, searchInputChange, selectInputChange, dateInputChange } from 'src/actions/trajets';
// import datas
import dataTags from '/src/data/data_tag.js';
import dataCards from '/src/data/data_sport.js';

const mapStateToProps = (state) => ({
    cards: dataCards,
    tags: dataTags,
    textInput: "Où pratiquer ?"
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

