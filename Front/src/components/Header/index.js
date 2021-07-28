import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import appBanner from '/src/assets/images/skate2.jpg';
import logo from '/src/assets/logo/coride-b.svg';
import login from '/src/assets/images/icon user white.png';
import logout from '/src/assets/images/logout-white.png';
// import logout from '/src/assets/images/pin.png';
import Nav from '../Nav';

// import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// JSON.parse(localStorage.getItem('token'))['access_token']

const Header = () => {
  // let user;
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const userLogged = () => {
    if (localStorage.getItem('tokens')) {
      // faire par rapport à un state isLogged
      JSON.parse(localStorage.getItem('tokens'));
      // onClick=(logOut());
      return (
        // <div>
        //   <p className="header-login">{user?.firstName}</p>
        // </div>
        <a
          onClick={logOut}
        >
          <img className="header-logout" src={logout} alt="logout" />
        </a>
      );
    } 

      return (
        <Link
          to="/connexion"
          exact
          // onClick={props.onButtonClickLogin}
        >
          <img className="header-login" src={login} alt="login" />
        </Link>
      );



    

  };

  return (
    <div className="header">
      <img className="header-photo" src={appBanner} alt="appBanner" />
      <img src={logo} className="header-logo" alt="Logo CoRide" />
      <Nav />
      {userLogged()}
    </div>
  );
};

// Header.proptypes = {

// };

export default Header;

