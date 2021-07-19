import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import appBanner from '/src/assets/images/skate2.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import Nav from '../Nav';

// import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

const Header = (props) => (
  <div className="header">
    <img className="header-photo" src={appBanner} alt="appBanner" />
    <img src={logo} className="header-logo" alt="Logo CoRide" />

    <Nav />

    <Link
      to="/connexion"
      exact
      onClick={props.onButtonClickLogin}
    >
      <img className="header-login" src={login} alt="login" />
    </Link>
  </div>
);

// Header.proptypes = {

// };

export default Header;
