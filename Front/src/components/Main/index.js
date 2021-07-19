import React from 'react';
// import PropTypes from 'prop-types';

import Itinerary from '../Itinerary';
import dataCards from '/src/data/data_sport.js';

import './styles.scss';

const Main = () => (
  <div className="content">
    <div className="main">
      <div className="main-title">
        <h1>Parcourez les trajets</h1>
      </div>
      <Itinerary
        cards={dataCards}
        onButtonClickProfilUser={() => {
          console.log('clic sur mon profil');
        }}
        onButtonClickValidation={() => {
          console.log('clic sur le lien Go');
        }}
      />
    </div>
    <div className="slogan">
      <p className="slogan-text">Le covoiturage des passionnés</p>
    </div>
  </div>
);

// Main.proptypes = {

// };
export default Main;
