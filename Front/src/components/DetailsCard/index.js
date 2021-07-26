import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './styles.scss';


const DetailsCard = ({
  islogged,
  card,
  onButtonClickProfilUser,
  onButtonClickValidation,
}) => (
    <div>
    {console.log("compo Detailscard", card)}

      <div className="card" >
        <div className="card-top">
          <div className="card-top_left">
            <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{card.driver}</a>
          </div>
          <div className="card-top_right">
            <p className="card-date">{new Date(card.departure_timestamp).toLocaleDateString("fr-FR")}</p>
            <p className="card-hour">{new Date(card.departure_timestamp).getUTCHours()}h{new Date(card.departure_timestamp).getUTCMinutes()}</p>
          </div>
        </div>
        <p className="card-destination">Départ: {card.departure_city}</p>
        <p className="card-destination">Arrivée: {card.destination_city}</p>
        <p className="card-description">description trajet : {card.description}</p>
        <div className="card-bottom">
          <span className="card-tag">{card.activity}</span>
          <span className="card-place">{card.places_available}</span>
          <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
        </div>
      </div>
  </div>
);

DetailsCard.propTypes = {
  onButtonClickProfilUser: PropTypes.func.isRequired,
  onButtonClickValidation: PropTypes.func.isRequired,
  card: PropTypes.shape({
    driver: PropTypes.string.isRequired,
    departure_timestamp: PropTypes.string.isRequired,
    departure_city: PropTypes.string.isRequired,
    destination_city: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    activity: PropTypes.string.isRequired,
    places_available: PropTypes.string.isRequired,
  })
};
export default DetailsCard;
