import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import appBanner from '/src/assets/images/skate2.jpg';
import login from '/src/assets/images/icon user white.png';

// import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

const Header = (props) => (
  <div className="header">
    <img className="header-logo" src={appBanner} alt="appBanner" />

    <div className="nav" onClick={props.onButtonClickMenu}>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Info</a></li>
            <li><a href="#">Contact</a> </li>
          </ul>
        </div>
      </nav>
    </div>

    <Link
      to="/LoginForm"
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
