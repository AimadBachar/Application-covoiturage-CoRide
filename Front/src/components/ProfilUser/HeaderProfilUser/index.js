import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import profilUserBanner from '/src/assets/images/wake1.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/logout-white.png';
import Nav from 'src/components/Nav';


import 'src/components/ProfilUser/HeaderProfilUser/styles.scss';


const HeaderProfilUser = ({
  logged,
  onButtonClickLogout
}) => {
  // let user;
  const logOut = () => {
    localStorage.clear();
    onButtonClickLogout();
  };

  if (logged) {
    return (
      <div className="header">
        <img className="header-photo" src={profilUserBanner} alt="signinBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <Nav logged={logged}/>

        <a
            onClick={logOut}
          >
            <img className="header-logout" src={logout} alt="logout" />
          </a>
      </div>
    )
  } else {
    return (
      <div className="header">
        <img className="header-photo" src={profilUserBanner} alt="signinBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
        <Nav logged={logged}/>
        <Link
          to="/connexion"
          exact
          // onClick={props.onButtonClickLogin}
        >
          <img className="header-login" src={login} alt="login" />
        </Link>
      </div>
  )
  }
      
};

// Header.proptypes = {

// };

export default HeaderProfilUser;