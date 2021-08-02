// Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import loginBanner from 'src/assets/images/snowbaord2.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/logout-white.png';
import Nav from 'src/components/Nav';
import 'src/components/Login/HeaderLogin/styles.scss';

// == Composant
const HeaderLogin = ({
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
        <img className="header-photo" src={loginBanner} alt="loginBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
         <Nav logged={logged}/>
          <a onClick={logOut}>
           <img className="header-logout" src={logout} alt="logout" />
          </a>
      </div>
    )
  } else {
    return (
      <div className="header">
        <img className="header-photo" src={loginBanner} alt="loginBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <Nav logged={logged}/>
         <Link to="/connexion" exact>
          <img className="header-login" src={login} alt="login" />
        </Link>
      </div>
    )
  };     
};

HeaderLogin.propTypes = {
  logged: PropTypes.bool,
};

// Valeurs par défaut pour les props
HeaderLogin.defaultProps = {
  logged: false, 
};

export default HeaderLogin;

