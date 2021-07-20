import { connect } from 'react-redux';
import Card from 'src/components/Card';
//import { searchSubmit, searchInputChange, selectInputChange, dateInputChange } from 'src/actions/trajets';
// import datas


const mapStateToProps = (state) => ({
    cards: state.trajets.cards,
    searchesValues: state.trajets.inputs
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

