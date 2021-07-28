import { connect } from 'react-redux';
import DetailsCard from 'src/components/DetailsCard';

// import datas


const mapStateToProps = (state) => ({
  logged: state.user.logged,
  card: state.trajets.card
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCard);

