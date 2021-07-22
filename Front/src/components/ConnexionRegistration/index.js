import React from 'react';
// import PropTypes from 'prop-types';

// iMPORT
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'src/containers/Login';
import photoKite from 'src/assets/images/kite.jpg';

// import Signin from './Signin';

import './styles.scss';

const ConnexionRegistration = () => (
  <div>
    <div className="connexionRegistration">
      <img className="connexionRegistration-photo" src={photoKite} alt="photo kite" />

      <Login />

    </div>

  </div>
);

export default ConnexionRegistration;

/*
    {
      loading && (
        <Router>
        <switch>
          <Redirect from="/login" to="/" />
          {
            <Route exact path= "/" >
            </Route>
          }
        </switch>
        </Router>
      )
    } */
