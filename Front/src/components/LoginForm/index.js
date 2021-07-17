import React from 'react';
// import PropTypes from 'prop-types';

import loupe from '/src/assets/images/loupe white 2.png';

import './styles.scss';

const LoginForm = () => (
  <div className="globalForms">
    <div className="login">
      <h1 className="login-title">
        S'identifier
      </h1>
      <form
        className="login-form"
        // onSubmit={handleSubmit}
      >

        <input
          className="login-form_input pseudo"
          type="text"
          name="pseudo"
          placeholder="Pseudo"
          // onChange={(evt) => {
          //   const placeChose = evt.target.value;
          //   onInputChange(placeChose);
          // }}
        />

        <input
          className="login-form_input"
          type="text"
          name="password"
          placeholder="Password"
          // onChange={(evt) => {
          //   const placeChose = evt.target.value;
          //   onInputChange(placeChose);
          // }}
        />
        <button
          type="submit"
          className="login-form_submit"
        >
          <img className="loupe" src={loupe} alt="loupe" />
        </button>
      </form>
    </div>

    <div className="registration">
      <h1 className="registration-title">
        S'inscrire
      </h1>
      <form
        className="registration-form"
        // onSubmit={handleSubmit}
      >
        <div className="registration-name">
          <input
            className="registration-form_input__name nom"
            type="text"
            name="nom"
            placeholder="Nom"
            // onChange={(evt) => {
            //   const placeChose = evt.target.value;
            //   onInputChange(placeChose);
            // }}
          />
          <input
            className="registration-form_input__name"
            type="text"
            name="prénom"
            placeholder="Prénom"
            // onChange={(evt) => {
            //   const placeChose = evt.target.value;
            //   onInputChange(placeChose);
            // }}
          />
        </div>
        <input
          className="registration-form_input password"
          type="text"
          name="password"
          placeholder="Mot de passe"
          // onChange={(evt) => {
          //   const placeChose = evt.target.value;
          //   onInputChange(placeChose);
          // }}
        />

        <input
          className="registration-form_input"
          type="text"
          name="password"
          placeholder="confirmer votre mot de passe"
          // onChange={(evt) => {
          //   const placeChose = evt.target.value;
          //   onInputChange(placeChose);
          // }}
        />
        <button
          type="submit"
          className="registration-form_submit"
        >
          <img className="loupe" src={loupe} alt="loupe" />
        </button>
      </form>
    </div>
  </div>
);

export default LoginForm;
