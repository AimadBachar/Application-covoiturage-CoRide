import React from 'react';
// import PropTypes from 'prop-types';

// import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

const Nav = (props) => (
  <div className="nav" onClick={props.onButtonClickMenu}>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="/connexion">Connexion</a></li>
          <li><a href="/signin">Inscription</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

// Header.proptypes = {

export default Nav;
