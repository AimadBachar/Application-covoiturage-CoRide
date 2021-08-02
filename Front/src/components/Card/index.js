// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'

// == Import : local
import './styles.scss';


// == Composant
const Card = ({
  cards,
  onClickCardDetails,
}) => {
  const handleClick = () => {
    onClickCardDetails();
  };

  const valideCards = cards?.filter(card=>new Date(card.departure_timestamp)>=Date.now());

  if (valideCards.length > 0) {
    return (
      <div>  
        {valideCards.sort((firstCard,secondCard)=>new Date(firstCard.departure_timestamp)-new Date(secondCard.departure_timestamp)).map((card) => (
          <Link onClick={handleClick} to={{
            pathname: `/travel`,
            search: `?id=${card.id}`,
            state: {card}
          }} key={card.id}
          >
          <div className="cardInfos"  >
            <div className="cardInfos-travel">
              <div className="cardInfos-travel_left">
  
                <p href="#" className="cardInfos-travel_left__profil" >{card.driver}</p>
                <p className="cardInfos-travel_left__destination">{card.departure_city}</p>
                <p className="cardInfos-travel_left__destination">{card.destination_city}</p>
              </div>
              <div className="cardInfos-travel_right">
                <p className="cardInfos-travel_right__date">{new Date(card.departure_timestamp).toLocaleDateString("fr-FR")}</p> 
                <p className="cardInfos-travel_right__hour">{new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(new Date(card.departure_timestamp))}</p>
                <span className="cardInfos-travel_right__tag">{card.activity}</span>

              </div>
            </div>
            </div>
          </Link>
        ))}
        </div>
    )}
      
    
   else {
    return(
      <div className="cardInfos">
        <p className="cardInfos-no_card_message">Aucun trajet pour votre recherche, veuillez recommencer</p>
      </div>
    )
  }
};

Card.propTypes = {
  onClickCardDetails: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      driver: PropTypes.string.isRequired,
      departure_timestamp: PropTypes.string.isRequired,
      departure_city: PropTypes.string.isRequired,
      destination_city: PropTypes.string.isRequired,
      activity: PropTypes.string.isRequired,
  }))
}

export default Card;