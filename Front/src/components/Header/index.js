import React from 'react';
//import PropTypes from 'prop-types';

import appBanner from '/src/assets/images/app-covoiturage.png';
import login from '/src/assets/images/login.png';
import menu from '/src/assets/images/menu.png';

//import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

const Header = (props) => (
  <div className="header">
    <img className="header-logo" src={appBanner} alt="appBanner" />
    <a href="#" onClick={props.onButtonClickLogin}>
      <img className="header-login" src={login} alt="login" />
    </a>
    <a href="#" onClick={props.onButtonClickMenu}>
      <img className="header-menu" src={menu} alt="menu" />
    </a>
  </div>

);

// Header.proptypes = {

// };

export default Header;
