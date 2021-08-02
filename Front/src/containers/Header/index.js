import { connect } from 'react-redux';
import Header from 'src/components/Header';
// import { action } from 'src/actions/user';
import dataTags from '/src/data/data_tag.js';
import { userLogout } from 'src/actions/user';
import { activeModal } from 'src/actions/modalInfo';

const mapStateToProps = (state) => ({
  tags: dataTags,
  textInput: 'Où pratiquer ?',
  logged: state.user.logged
});


const mapDispatchToProps = (dispatch) => ({

  onButtonClickMenu: () => {
    console.log('open menu');
  },
  onButtonClickLogin: () => {
    console.log('open login and suscribe');
  },
  onButtonClickLogout: () => {
    console.log('logout');
    const action = userLogout();
    const success = activeModal({
      header:"Information",
      message:"Vous êtes déconnecté"
    })
    dispatch(action);
    dispatch(success);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
