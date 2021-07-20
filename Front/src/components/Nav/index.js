import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" exact>
            <li>Accueil</li>
          </Link>

          <Link to="/profil" exact>
            <li>Profil</li>
          </Link>

          <li><a href="#">Info</a></li>
          <li><a href="#">Contact</a> </li>
        </ul>
      </div>
    </nav>
  </div>
);

// Header.proptypes = {

export default Nav;
