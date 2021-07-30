import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


import './styles.scss';

const Nav = (props) => {
  if (!props.logged) {
    return (
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
              <Link to="/contact" exact>
                <li>Contact</li>
              </Link>
              <Link to="/info" exact>
                <li>Info</li>
              </Link>
              <Link to="/connexion" exact>
              <li>Connexion</li>
              </Link>
              <Link to="/inscription" exact>
              <li>S'inscrire</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
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
                <li>Mon profil</li>
              </Link>

              <Link to="/info" exact>
                <li>Info</li>
              </Link>

              <Link to="/profilpage" exact>
                <li>Co'Riders</li>
              </Link>

              <Link to="/contact" exact>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    ); 
  }
}

// Header.proptypes = {

export default Nav;
