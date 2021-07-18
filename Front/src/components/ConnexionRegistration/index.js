import React from 'react';
// import PropTypes from 'prop-types';

import Login from './Login';
import Signin from './Signin';

import './styles.scss';


const ConnexionRegistration = () => (
  <div className="globalForms">
    
    <Login 
      email="me@mail.com"
      password="123"
      isLogged={false}
      loggedMessage="Welcome user"
     
      handleLogin={() => {
        console.log('login')
      }}
      handleLogout={() => {
        console.log('logout')
      }}

      /* changeField= {(value, name) => {
        console.log('change in ' + name + ' :', value);
      }}*/
      
    onInputChange={(textSaisi) => {
      console.log('change', textSaisi);
    }}
    onSubmitLogin={()=>{
      console.log('submit');
    }}
    />

    <Signin />

  </div>
);

export default ConnexionRegistration;
