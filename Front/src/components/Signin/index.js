import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Redirect } from 'react-router-dom';

//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

import Field from 'src/components/Signin/Field';
import 'src/components/Signin/styles.scss';
import photoKite from 'src/assets/images/kitewindsurf.jpg';


const Signin = ({

    isSignedIn,
    signedMessage,
    first_name,
    last_name,
    email, // mail de l'utilisateur
    password,
    birthdate,
    changeField,
    handleSignin,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignin();
  };

  return (
  <div className="signin">
  <img className="login-photo" src={photoKite} alt="photo kite" />
  <div className="signin-form">
  {isSignedIn && (

<div className="signin-form-signed">
<Redirect from="/inscription" to="/" />
<p className="signin-message">

  {signedMessage}

</p>
</div>

  )}
  {!isSignedIn && (

    <form
      autoComplete="off"
      className="signin-form-element"
      onSubmit={handleSubmit}
    >
      <h1 className="signin-form-title">
      Inscription
    </h1> 
    <Field 
          className="signin-form-input"
          type="file" //name?
          name="picture"
          placeholder="Picture"
                   
        />
        <Field 
          className="signin-form-input"
          type="text" //name?
          name="last_name"
          placeholder="Nom"
          onChange={changeField}
          value={last_name}
          
        />
        <Field
          className="signin-form-input"
          type="text"
          name="first_name"
          placeholder="Prénom"
          onChange={changeField}
          value={first_name}
        />
  
      <Field
        className="signin-form-input"
        type="date"
        name="birthdate"
        placeholder="your birthdate"
        autocorrect="off"
        data-date-split-input="true"
        onChange={changeField} 
        value={birthdate} //date?
        /* type="date"
        label="date de naissance"
        defaultValue="23-05-1990"*/
      />

      <Field
        className="signin-form-input"
        name="email"
        placeholder="Adresse Email"
        onChange={changeField}
        value={email}
      />

      <Field
        className="signin-form-input"
        type="password"
        name="password"
        placeholder="Mot de passe"
        onChange={changeField}
        value={password}
      />
 
      <Field
        className="signin-form-input"
        type="password"
        name="password"
        placeholder="Confirmez votre mot de passe"
        onChange={changeField}
        value={password}
        
      />
       <div className="signin-button">
      <button
        type="submit"
        className="signin-form-submit"
      >
        Valider
      </button>
      </div>
      <div className="login-redirection">
            <p className="login-redirection-text">
              Déjà membre ?            
            <Link
              className="login-redirection-link"
              to="/connexion"
            >
            Connectez-vous
            </Link>
            </p>
            </div>
          
        </form>
    )}
        </div>
        </div>
        
  );
};


  Signin.propTypes = {
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
};

// Valeurs par défaut pour les props
Signin.defaultProps = {
  isSignedIn: false,
  signedMessage: 'Signin Done',
};



export default Signin;


