import React from 'react';
// import PropTypes from 'prop-types';

import instagram from '/src/assets/images/instagram.png';
import facebook from '/src/assets/images/facebook.png';
import twitter from '/src/assets/images/twitter.png';

import '/src/components/Footer/styles.scss';

const Footer = (props) => (
  <div className="footer">
    <div className="footer-logo">
      <a href="#" onClick={props.onButtonClickInstagram}>
        <img className="footer-logo_instagram" src={instagram} alt="instagram" />
      </a>
      <a href="#" onClick={props.onButtonClickFacebook}>
        <img className="footer-logo_facebook" src={facebook} alt="facebook" />
      </a>
      <a href="#" onClick={props.onButtonClickTwitter}>
        <img className="footer-logo_twitter" src={twitter} alt="twitter" />
      </a>
    </div>
    <div className="footer-links">
        <a href="#" onClick={props.onButtonClickMentions}>Mentions légales</a>
        <a href="#" onClick={props.onButtonClickContact}>Contact</a>
    </div>
  </div>
);

// Footer.proptypes = {

// };

export default Footer;
