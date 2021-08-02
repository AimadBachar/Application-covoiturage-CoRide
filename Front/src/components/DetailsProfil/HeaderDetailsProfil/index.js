import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import detailsProfilBanner from '/src/assets/images/bmx.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/logout-white.png';
import Nav from 'src/components/Nav';


import 'src/components/DetailsProfil/HeaderDetailsProfil/styles.scss';


const HeaderDetailsProfil = ({
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
        <img className="header-photo" src={detailsProfilBanner} alt="detailsCardBanner" />
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
        <img className="header-photo" src={detailsProfilBanner} alt="detailsCardBanner" />
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

export default HeaderDetailsProfil;