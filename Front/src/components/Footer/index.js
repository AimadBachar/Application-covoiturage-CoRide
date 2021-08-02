// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import : local
import instagram from '/src/assets/images/instagram white.png';
import facebook from '/src/assets/images/facebook white.png';
import twitter from '/src/assets/images/twitter white.png';
import '/src/components/Footer/styles.scss';

// == Composant
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
      <Link to="/mentions">Mentions légales</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
);

// == Export
export default Footer;
