// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// == Import : local
import './styles.scss';
import driver from '/src/assets/images/driver-orange0.png';
import pin from '/src/assets/images/pin.png';


// == Composant
const Card = ({
  cards,
  onClickCardDetails,
}) => {
  const handleClick = () => {
    onClickCardDetails();
  };

  let valideCards;
  if(cards.length>0){
      valideCards = cards?.filter(card=>new Date(card.departure_timestamp)>=Date.now());
  }else{
    valideCards = [];
  }
  if (valideCards.length > 0) {
    return (
      <div className="cards">  
        {valideCards.sort((firstCard,secondCard)=>new Date(firstCard.departure_timestamp)-new Date(secondCard.departure_timestamp)).map((card) => (
          <Link onClick={handleClick} to={{
            pathname: `/travel`,
            search: `?id=${card.id}`,
            state: {card}
          }} key={card.id}
          >
          <div className="cardInfos"  >
            <div className="cardInfos-travel">
              <div className="cardInfos-travel_top">
                
              <div className="cardInfos-travel_top__box__destination">
                
                  <p className="cardInfos-travel_top__box__destination__city_d"><img src={pin}/>{card.departure_city}</p>
                  <p className="cardInfos-travel_top__box__destination__city_a">{card.destination_city}<img src={pin}/></p>
                </div>
                <img className="cardInfos-travel_top__logo" src={driver}/>
                <p className="cardInfos-travel_top__profil" >{card.driver}</p>
                
              </div>
              <div className="cardInfos-travel_botton">
                <span className="cardInfos-travel_bottom__tag">#{card.activity}</span>
                <p className="cardInfos-travel_bottom__date">Départ le {new Date(card.departure_timestamp).toLocaleDateString("fr-FR")} à {new Intl.DateTimeFormat('fr-FR', { timeStyle: 'short' }).format(new Date(card.departure_timestamp))}</p> 
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

// == Export
export default Card;