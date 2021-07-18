import React from 'react';
// import PropTypes from 'prop-types';

import Login from './Login';
import Signin from './Signin';

import './styles.scss';


const LoginForm = () => (
  <div className="globalForms">
    
    <Login 
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

export default LoginForm;
