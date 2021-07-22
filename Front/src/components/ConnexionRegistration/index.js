import React from 'react';
// import PropTypes from 'prop-types';

// iMPORT
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'src/containers/Login';
import photoKite from 'src/assets/images/kite.jpg';
import Signin from './Signin';

//import Signin from './Signin';


import './styles.scss';
import Signin from './Signin';

const ConnexionRegistration = () => (

<div>

  <div className="connexionRegistration">
  <img className="connexionRegistration-photo" src={photoKite} alt="photo kite" />
     
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
