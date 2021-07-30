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
              <li><a href="#">Info</a></li>
              <Link to="/contact" exact>
                <li>Contact</li>
              </Link>
              <Link to="/info" exact>
                <li>Info</li>
              </Link>
              <li><a href="#">Contact</a></li>
              <li><a href="/connexion">Connexion</a></li>
              <li><a href="/inscription">S'inscrire</a></li>
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
                <li>Profil</li>
              </Link>

              <Link to="/info" exact>
                <li>Info</li>
              </Link>

              <Link to="/profilpage" exact>
                <li>Les utilisateurs</li>
              </Link>
              <li><a href="#">Info</a></li>
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
