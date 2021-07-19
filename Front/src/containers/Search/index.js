import {connect} from 'react-redux';
import Search from 'src/components/Search';
// import datas
import dataTags from '/src/data/data_tag.js';

const mapStateToProps = () => ({
    tags: dataTags,
    textInput: "Où pratiquer ?"
});

const mapDispatchToProps = (dispatch) => ({
    
    onSelectChange: (selectedSport) => {
        console.log('tu as choisi le', selectedSport);
    },
    
    onInputChange: (placeChose) => {
        console.log('ton lieu de pratique est', placeChose);
    },
    onDateChange: (dateSearch) => {
    console.log('la date selectionnée est le', dateSearch);
    },
    onSubmitSearch: () => {
    console.log('submit');
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

