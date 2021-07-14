import React from 'react';
import PropTypes from 'prop-types';

import iconLike from '/src/assets/images/pouce-en-l_air.png';
import './styles.scss';

const Card = () => (
  <div>
    <div className="card">
      <div className="card-top">
        <div className="card-top_left">
          <img className="card-like" src={iconLike} alt="icon-like" />
          <a className="card-profil">Laurent</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">14/07/2021</p>
          <p className="card-hour">12h45</p>
        </div>
      </div>
      <p className="card-destination">Bordeaux -> Quibééééron</p>
      <div className="card-bottom">
        <span className="card-tag">SURF</span>
        <button className="card-button" type="button">GO !</button>
      </div>
    </div>
    <div className="card">
      <div className="card-top">
        <div className="card-top_left">
          <img className="card-like" src={iconLike} alt="icon-like" />
          <a className="card-profil">Laurent</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">14/07/2021</p>
          <p className="card-hour">12h45</p>
        </div>
      </div>
      <p className="card-destination">Bordeaux -> Quibééééron</p>
      <div className="card-bottom">
        <span className="card-tag">SURF</span>
        <button className="card-button" type="button">GO !</button>
      </div>
    </div> 
  </div>
);

// Card.proptypes = {

// };
export default Card;
