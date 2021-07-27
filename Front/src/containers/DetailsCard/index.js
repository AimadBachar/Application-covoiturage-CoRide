import { connect } from 'react-redux';
import DetailsCard from 'src/components/DetailsCard';

// import datas
import { particpeTravel, fetchProfilDriver } from 'src/actions/trajets';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  detailsCard: localStorage.getItem("card")
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClickProfilUser: () => {
    console.log("viewProfil Containers-detailsCard");
    const action = fetchProfilDriver();
    dispatch(action);
  },
  onButtonClickValidation: () => {
    console.log("participe  Containers-detailsCard");
    const action = particpeTravel();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCard);
