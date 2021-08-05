import { connect } from 'react-redux';
import dataTags from '/src/data/data_tag.js';
import { userLogout } from 'src/actions/user';
import HeaderContact from 'src/components/Contact/HeaderContact';



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
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContact);
