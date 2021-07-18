import React from 'react';
import './styles.scss';


const Field = () => (
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
            Se connecter
          </button>
        </form>
      </div>  
  );




export default Field;