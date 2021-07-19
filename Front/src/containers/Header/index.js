import { connect } from 'react-redux';
import Header from 'src/components/Header';
//import { action } from 'src/actions/user';
import dataTags from '/src/data/data_tag.js';

const mapDispatchToProps = (state) => ({
    onButtonClickMenu: () => {
        console.log('open menu');
      },
      onButtonClickLogin: () => {
        console.log('open login and suscribe');
      }
});

const mapStateToProps = () => ({
    tags: dataTags,
    textInput: "Où pratiquer ?"
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
