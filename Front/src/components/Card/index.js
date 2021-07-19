import React from 'react';
// import PropTypes from 'prop-types';

import iconLike from '/src/assets/images/pouce-en-l_air.png';
import './styles.scss';

const Card = ({
  islogged,
  cards,
  onButtonClickProfilUser,
  onButtonClickValidation,
}) => (
  <div>
    {cards.map((card) => (
      <div className="card" key={card.id}>
        <div className="card-top">
          <div className="card-top_left">
            <img className="card-like" src={iconLike} alt="icon-like" />
            <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{card.pseudo}</a>
          </div>
          <div className="card-top_right">
            <p className="card-date">{card.date}</p>
            <p className="card-hour">{card.hour}</p>
          </div>
        </div>
        <p className="card-destination">Départ: {card.departure}</p>
        <p className="card-destination">Arrivée: {card.arrival}</p>
        <div className="card-bottom">
          <span className="card-tag">{card.tag}</span>
          <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
        </div>
      </div>
    ))}
  </div>
);

// Card.proptypes = {

// };
export default Card;
