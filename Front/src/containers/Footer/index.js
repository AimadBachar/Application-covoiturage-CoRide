import { connect } from 'react-redux';
import Footer from 'src/components/Footer';
//import { action } from 'src/actions/user';


const mapStateToProps = () => ({

});

const mapDispatchToProps = (state) => ({
    onButtonClickInstagram: () => {
        console.log('clic sur le lien Instagram');
      },
      onButtonClickFacebook: () => {
        console.log('clic sur le lien Facebook');
      },
      onButtonClickTwitter: () => {
        console.log('clic sur le lien Twitter');
      },
      onButtonClickMentions: () => {
        console.log('clic sur nos mentions légales');
      },
      onButtonClickContact: () => {
        console.log('clic pour nous contacter');
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);