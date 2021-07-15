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
          <a href="/profil" className="card-profil">Laurent</a>
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
          <a href="/profil" className="card-profil">Aimad</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">16/07/2021</p>
          <p className="card-hour">11h45</p>
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
          <a href="/profil" className="card-profil">Anna</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">16/07/2021</p>
          <p className="card-hour">18h45</p>
        </div>
      </div>
      <p className="card-destination">Bidart -> Lacanau</p>
      <div className="card-bottom">
        <span className="card-tag">KITESURF</span>
        <button className="card-button" type="button">GO !</button>
      </div>
    </div>
    <div className="card">
      <div className="card-top">
        <div className="card-top_left">
          <img className="card-like" src={iconLike} alt="icon-like" />
          <a href="/profil" className="card-profil">Anna</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">16/07/2021</p>
          <p className="card-hour">18h45</p>
        </div>
      </div>
      <p className="card-destination">Biarritz-> Mundaka</p>
      <div className="card-bottom">
        <span className="card-tag">SKATE</span>
        <button className="card-button" type="button">GO !</button>
      </div>
    </div>
  </div>
);

// Card.proptypes = {

// };
export default Card;
