import { connect } from 'react-redux';
import DetailsProfil from 'src/components/DetailsProfil';


const mapStateToProps = (state) => ({
 // user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsProfil);