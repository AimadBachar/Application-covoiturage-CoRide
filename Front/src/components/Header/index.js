import React from 'react';
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

    {/* <div className="nav" onClick={props.onButtonClickMenu}>
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
    </div> */}

    <a href="#" onClick={props.onButtonClickLogin}>
      <img className="header-login" src={login} alt="login" />
    </a>
  </div>
);

// Header.proptypes = {

// };

export default Header;
