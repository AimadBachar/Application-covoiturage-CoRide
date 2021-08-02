// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local
import headerContactBanner from '/src/assets/images/surfers.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/logout-white.png';
import Nav from 'src/components/Nav';
import 'src/components/Contact/HeaderContact/styles.scss';

// == Composant
const HeaderContact = ({
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
        <img className="header-photo" src={headerContactBanner} alt="headerContactBanner" />
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
        <img className="header-photo" src={headerContactBanner} alt="headerContactBanner" />
        <img src={logo} className="header-logo" alt="Logo CoRide" />
          <Nav logged={logged}/>
           <Link to="/connexion" exact>
            <img className="header-login" src={login} alt="login" />
           </Link>
      </div>
    )

  };     
};

HeaderContact.propTypes = {
  logged: PropTypes.bool,
};

// Valeurs par défaut pour les props
HeaderContact.defaultProps = {
  logged: false, 
};

// == Export 
export default HeaderContact;