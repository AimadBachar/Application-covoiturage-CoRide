import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/ConnexionRegistration/Login/Field';

import 'src/components/ConnexionRegistration/Login/styles.scss';

const Login = ({
    email,
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
        <h1 className="login-form-title">
          S'identifier
        </h1>

        {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        
        <form
          autoComplete="off"
          className="login-form-element"
          onSubmit={handleSubmit}
          //{onSubmitLogin}
        >  
          <Field 
          className="login-form-input"
            type="email"
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            className="login-form-input" 
            type="password"
            name="password"
            placeholder="Password"
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
  email: PropTypes.string.isRequired,
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