import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'

import './styles.scss';



const DetailsCard = ({
  islogged,
  onButtonClickProfilUser,
  onButtonClickValidation,
}) => {
    
    const query = new URLSearchParams(useLocation().search);

    const id = query.get("id");    
    
    const cards = JSON.parse(localStorage.getItem("travels"));
    
    const card = cards.find(card=>card.id == id);
    

return (
    <div className="card" >
      <div className="card-top">
        <div className="card-top_left">
          <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{card.driver}</a>
        </div>
        <div className="card-top_right">
          <p className="card-date">{new Date(card.departure_timestamp).toLocaleDateString("fr-FR")}</p>
          <p className="card-hour">{new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(new Date(card.departure_timestamp))}</p>
        </div>
      </div>
      <p className="card-destination">Départ: {card.departure_city}</p>
      <p className="card-destination">Arrivée: {card.destination_city}</p>
      <p className="card-description">description trajet dsgfshsfhsdhsdghsdgsdg sdgsdvsd dsbvsvsvsdv: {card.description}</p>
      <div className="card-bottom">
        <span className="card-tag">{card.activity}</span>
        <span className="card-place">{card.places_available} place(s)</span>
        <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
      </div>
    </div>
)}


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
