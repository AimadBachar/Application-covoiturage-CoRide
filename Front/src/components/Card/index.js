import React from 'react';
// import PropTypes from 'prop-types';

import iconLike from '/src/assets/images/pouce-en-l_air.png';
import './styles.scss';

const Card = ({
      date,
      heure,
      trajet,
      tag,
      pseudo,
      onButtonClickProfilUser,
      onButtonClickValidation,
}) => (
  <div>
    <div className="card">
      <div className="card-top">
        <div className="card-top_left">
          <img className="card-like" src={iconLike} alt="icon-like" />
          <a href="#" className="card-profil"onClick={onButtonClickProfilUser}>{pseudo}</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">{date}</p>
          <p className="card-hour">{heure}</p>
        </div>
      </div>
      <p className="card-destination">{trajet}</p>
      <div className="card-bottom">
        <span className="card-tag">{tag}</span>
        <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
      </div>
    </div>
    <div className="card">
      <div className="card-top">
        <div className="card-top_left">
          <img className="card-like" src={iconLike} alt="icon-like" />
          <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{name}</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">{date}</p>
          <p className="card-hour">{heure}</p>
        </div>
      </div>
      <p className="card-destination">{trajet}</p>
      <div className="card-bottom">
        <span className="card-tag">{tag}</span>
        <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
      </div>
    </div>
    <div className="card">
      <div className="card-top">
        <div className="card-top_left">
          <img className="card-like" src={iconLike} alt="icon-like" />
          <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{name}</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">{date}</p>
          <p className="card-hour">{heure}</p>
        </div>
      </div>
      <p className="card-destination">{trajet}</p>
      <div className="card-bottom">
        <span className="card-tag">{tag}</span>
        <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
      </div>
    </div>
    <div className="card">
      <div className="card-top">
        <div className="card-top_left">
          <img className="card-like" src={iconLike} alt="icon-like" />
          <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{name}</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">{date}</p>
          <p className="card-hour">{heure}</p>
        </div>
      </div>
      <p className="card-destination">{trajet}</p>
      <div className="card-bottom">
        <span className="card-tag">{tag}</span>
        <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
      </div>
    </div>
  </div>
);

// Card.proptypes = {

// };
export default Card;
