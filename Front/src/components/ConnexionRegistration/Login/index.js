import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const Login = ({
  email,
  password,
  ///changeField
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,


    onInputChange,
    onSubmitLogin
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
   /* const handleChange = (evt) => {
        onChange(evt.target.value, name);
    };*/

   // const inputId = `field-${name}`;

    return (
      <div className="login">
        <h1 className="login-title">
          S'identifier
        </h1>

        {isLogged && (
        <div className="login-logged">
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
      )}
      {!isLogged && (
        

        <form
          className="login-form"
          onSubmit={onSubmitLogin}
        >
  
          <input
            className="login-form_input pseudo"
            type="text"
            name="email"
            placeholder="e-mail"
            value={email}
            onChange={(evt) => {
              const textSaisi = evt.target.value;
              onInputChange(textSaisi);
            }}
          />
  
          <input
            className="login-form_input"
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => {
              const textSaisi = evt.target.value;
              onInputChange(textSaisi);
            }}
          />
          <button
            type="submit"
            className="login-form_submit"
          >
            Se connecter
          </button>
        </form>
      )}
      </div>  
    );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  //changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};





export default Login;