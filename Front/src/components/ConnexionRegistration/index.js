import React from 'react';
// import PropTypes from 'prop-types';

import Login from 'src/containers/Login';
import Signin from './Signin';

import photoKite from 'src/assets/images/kite.jpg';
import './styles.scss';

const ConnexionRegistration = () => (
<div>
<img className="photo" src={photoKite} alt="photo kite" />

  <div className="connexionRegistration">
   
    <Login 
    /*
      email="email@mail.com"
      password="password"
      isLogged={false}
      loggedMessage="Welcome Laurent"
      changeField= {(value, name) => {
        console.log('change in ' + name + ' :', value);
      }}
      handleLogin={() => {
        console.log('login')
      }}
      handleLogout={() => {
        console.log('logout')
      }}*/
    />
   <Signin />
   </div>
  </div>
);

export default ConnexionRegistration;
