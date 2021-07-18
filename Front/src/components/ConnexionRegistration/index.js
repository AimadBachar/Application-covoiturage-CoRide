import React from 'react';
// import PropTypes from 'prop-types';

import Login from './Login';
import Signin from './Signin';

import './styles.scss';


const ConnexionRegistration = () => (
  <div className="globalForms">
    
    <Login 
      email="email@mail.com"
      password="password"
      isLogged={true}
      loggedMessage="Welcome user"
      changeField= {(value, name) => {
        console.log('change in ' + name + ' :', value);
      }}
      handleLogin={() => {
        console.log('login')
      }}
      handleLogout={() => {
        console.log('logout')
      }}
     /* 
    onInputChange={(textSaisi) => {
      console.log('change', textSaisi);
    }}*/
    /*
    /*
    onSubmitLogin={()=>{
      console.log('submit');
    }}*/
    />

    <Signin />

  </div>
);

export default ConnexionRegistration;
