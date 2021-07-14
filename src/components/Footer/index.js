import React from 'react';
import instagram from '/src/assets/images/instagram.png';
import facebook from '/src/assets/images/facebook.png';
import twitter from '/src/assets/images/twitter.png';
//import PropTypes from 'prop-types';
import '/src/components/Footer/styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-logo">
      <img className="footer-logo_instagram" src={instagram} alt="instagram" />
      <img className="footer-logo_facebook" src={facebook} alt="facebook" />
      <img className="footer-logo_twitter" src={twitter} alt="twitter" />
    </div>
    <div className="footer-links">
        <p>Mentions légales</p>
      </div>
      <div>
        <p>Contact</p>
      </div>
  </div>
);

// Footer.proptypes = {

// };

export default Footer;
