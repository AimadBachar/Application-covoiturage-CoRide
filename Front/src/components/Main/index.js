import React from 'react';
//import PropTypes from 'prop-types';

import Card from '../Card';
import dataCards from '/src/data/data_sport.js';

import './styles.scss';

const Main = () => (
<div className="main">
  <div className="main-title">
    <h1>Parcourez les trajets</h1>
  </div>
  <Card
        cards={dataCards.cards}
        // date={dataCards.cards.date}
        // heure={heure}
        // trajet={trajet}
        // tag={tag}
        // pseudo={pseudo}
        onButtonClickProfilUser={() => {
        console.log('clic sur mon profil');
      }}
        onButtonClickValidation={() => {
        console.log('clic sur le lien Go');
      }}
   />
</div>
);

// Main.proptypes = {

// };
export default Main;


