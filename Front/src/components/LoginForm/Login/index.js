import React from 'react';
import './styles.scss';


const Login = ({
    onInputChange,
    onSubmitLogin
}) => {
    const handleChange = (evt) => {
        onChange(evt.target.value, name);
    };

   // const inputId = `field-${name}`;

    return (
      <div className="login">
        <h1 className="login-title">
          S'identifier
        </h1>
        <form
          className="login-form"
          onSubmit={onSubmitLogin}
        >
  
          <input
            className="login-form_input pseudo"
            type="text"
            name="email"
            placeholder="e-mail"
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
      </div>  
    );
};



export default Login;