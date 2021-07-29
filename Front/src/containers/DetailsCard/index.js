import { connect } from 'react-redux';
import DetailsCard from 'src/components/DetailsCard';

// import datas
import { particpeTravel, fetchProfilDriver } from 'src/actions/trajets';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  updateCard : state.trajets.DetailsCard
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClickProfilUser: () => {
    console.log("viewProfil Containers-detailsCard");
    const action = fetchProfilDriver();
    dispatch(action);
  },
  onButtonClickValidation: (card) => {
    console.log("participe  Containers-detailsCard", card);
    const action = particpeTravel(card);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCard);

