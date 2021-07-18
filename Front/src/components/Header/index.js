import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import appBanner from '/src/assets/images/skate2.jpg';
import login from '/src/assets/images/icon user white.png';

import Nav from '../Nav';

// import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

const Header = (props) => (
  <div className="header">
    <img className="header-logo" src={appBanner} alt="appBanner" />

    <Nav />
    <Link
      to="/LoginForm"
      exact
      onClick={props.onButtonClickLogin}
    >
      <a href="#" onClick={props.onButtonClickLogin}>

        <img className="header-login" src={login} alt="login" />
      </a>
    </Link>
  </div>
);

 // Header.proptypes = {

// }; 

export default Header;
