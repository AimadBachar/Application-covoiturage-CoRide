import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/ConnexionRegistration/Login/Field';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import 'src/components/ConnexionRegistration/Login/styles.scss';

const Login = ({
    user,
    password,
    changeField,
    handleLogin,
    handleLogout,
    isLogged,
    loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
   
  };

    return (
      <div className="login-form">
        {isLogged && (
          <div className="login-logged">
          <Redirect from="/connexion" to="/" />
              <p className="login-message">
            
                {loggedMessage}
              
              </p>
            <button
              type="button"
              className="login-button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
          // <Redirect from="/login" to="/" />
        )}
      {!isLogged && (    
        <form
          autoComplete="off"
          className="login-form-element"
          // <Redirect from="/connexion" to="/" />
          onSubmit={handleSubmit}
        > 
      <h1  className="login-form-title">
      Connexion
    </h1>
          <Field 
          className="login-form-input"
            name="user"
            placeholder="Adresse Email"
            onChange={changeField}
            value={user}
          />
          <Field
            className="login-form-input" 
            type="password"
            name="password"
            placeholder="mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-submit"
          >
            Ok
          </button>
        </form>
      )}
      </div>  
    );
  };

Login.propTypes = {
  user: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

// Valeurs par défaut pour les props
Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

// == Export
export default Login;

// anna@sion.fr