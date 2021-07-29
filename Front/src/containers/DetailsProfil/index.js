import { connect } from 'react-redux';
import DetailsProfil from 'src/components/DetailsProfil';
import { fetchUsers } from "src/actions/detailsProfil";


const mapStateToProps = (state) => ({
  usersProfils: state.detailsProfil.usersProfils
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers:()=>{
    console.log("containers detailsProfils");
    const action = fetchUsers();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsProfil);
