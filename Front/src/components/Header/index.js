// Import == npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import : local
import appBanner from '/src/assets/images/skate2.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/logout-white.png';
import Nav from '../Nav';
import './styles.scss';

// == Composant
const Header = ({
  logged,
  onButtonClickLogout
}) => {
  const logOut = () => {
    localStorage.clear();
    onButtonClickLogout();
  };

  if (logged) {
    return (
      <div className="header">
        <div className="menu-desktop">
          <ul>
            <li>Accueil</li>
            <li>Info</li>
            <li>S'inscrire</li>
            <li>Publier un trajet</li>
          </ul>
        </div>
        <img className="header-photo" src={appBanner} alt="appBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <p className="slogan">Le covoiturage des passionnés!</p>
         <Nav logged={logged}/>
          <a onClick={logOut}>
            <img className="header-logout" src={logout} alt="logout" />
          </a>
      </div>
    )
  } else {
    return (
      <div className="header">
           <div className="menu-desktop">
            <ul className="menu-desktop-title">
            <li>Accueil</li>
            <li>Info</li>
            <li>Contact</li>
            <li>Publier un trajet</li>
            <li>S'inscrire</li>
          </ul>
        </div>
        <img className="header-photo" src={appBanner} alt="appBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <p className="slogan">Le covoiturage pour les passionnés!</p>
         <Nav logged={logged}/>
          <Link to="/connexion" exact>
            <img className="header-login" src={login} alt="login" />
        </Link>
      </div>
    )
  };      
};

Header.propTypes = {
  logged: PropTypes.bool,
};

// Valeurs par défaut pour les props
Header.defaultProps = {
  logged: false, 
};

// == Export 
export default Header;

