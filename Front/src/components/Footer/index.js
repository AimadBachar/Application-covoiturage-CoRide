import React from 'react';
import instagram from '/src/assets/images/instagram.png';
import facebook from '/src/assets/images/facebook.png';
import twitter from '/src/assets/images/twitter.png';
//import PropTypes from 'prop-types';
import '/src/components/Footer/styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-logo">
      <a href="/instagram">
        <img className="footer-logo_instagram" src={instagram} alt="instagram" />
      </a>
      <a href="/facebook">
        <img className="footer-logo_facebook" src={facebook} alt="facebook" />
      </a>
      <a href="/twitter">
        <img className="footer-logo_twitter" src={twitter} alt="twitter" />
      </a>
    </div>
    <div className="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
    </div>
    <div>
        <a href="/contact">Contact</a>
    </div>
  </div>
);

// Footer.proptypes = {

// };

export default Footer;