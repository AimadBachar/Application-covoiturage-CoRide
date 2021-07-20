import React from 'react';
// import PropTypes from 'prop-types';

import Login from 'src/containers/Login';
import photoKite from 'src/assets/images/kite.jpg';
import Signin from './Signin';

import './styles.scss';

const ConnexionRegistration = () => (
  <div>
    <img className="photo" src={photoKite} alt="photo kite" />

    <div className="connexionRegistration">

      <Login />

      <Signin />
    </div>
  </div>
);

export default ConnexionRegistration;
