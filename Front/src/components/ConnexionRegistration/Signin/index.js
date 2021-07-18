import React from 'react';
// import PropTypes from 'prop-types';

import loupe from '/src/assets/images/loupe white 2.png';
import './styles.scss';

const Signin = () => (
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
          Ok
        </button>
      </form>
    </div>
);

export default Signin;