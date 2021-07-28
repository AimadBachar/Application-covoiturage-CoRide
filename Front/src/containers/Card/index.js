import { connect } from 'react-redux';
import Card from 'src/components/Card';
import { fetchTravel } from 'src/actions/trajets';
// import datas


const mapStateToProps = (state) => ({
  cards: state.trajets.cards
});

const mapDispatchToProps = (dispatch) => ({
  onClickCardDetails: (payload) => {
    console.log("card in containersCard");
    const action = fetchTravel(payload);
    dispatch(action)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

