import React from 'react';
// import PropTypes from 'prop-types';

import Login from 'src/containers/Login';
//import Signin from './Signin';

import photoKite from 'src/assets/images/kite.jpg';
import './styles.scss';
//import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
    }*/