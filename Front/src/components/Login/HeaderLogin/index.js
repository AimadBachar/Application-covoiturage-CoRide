// Import : npm
import React from 'react';
<<<<<<< HEAD:Front/src/components/HeaderLogin/index.js
import { Link, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
=======
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
>>>>>>> 5680f6b048835caee80403337efb407758b8091d:Front/src/components/Login/HeaderLogin/index.js

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
<<<<<<< HEAD:Front/src/components/HeaderLogin/index.js



  // let user;
=======
>>>>>>> 5680f6b048835caee80403337efb407758b8091d:Front/src/components/Login/HeaderLogin/index.js
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

