import React from 'react';
import PropTypes from 'prop-types';

//import iconLike from '/src/assets/images/pouce-en-l_air.png';
import './styles.scss';

const Card = ({
  islogged,
  cards,
  onButtonClickProfilUser,
  onButtonClickValidation,
}) => (
  <div>
    {console.log("compo cards", cards)}
    {cards.map((card) => (
      <div className="card" key={card.travel_id}>
        <div className="card-left">
          <div className="card-left_travel">
            {/* <img className="card-like" src={iconLike} alt="icon-like" /> */}
            <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{card.driver}</a>
            <p className="card-destination">Départ: {card.departure_city}</p>
            <p className="card-destination">Arrivée: {card.destination_city}</p>
          </div>
          <div className="card-left_infos">
             <p className="card-date">{new Date(card.departure_timestamp).toLocaleDateString("fr-FR")}</p> 
            <p className="card-hour">{new Date(card.departure_timestamp).getUTCHours()}h{new Date(card.departure_timestamp).getUTCMinutes()}</p>
          </div>
        </div>
        {/* <div className="card-right"> */}
          <span className="card-tag">{card.activity}</span>
          <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
        {/* </div> */}
      </div>
    ))}
  </div>
);

Card.propTypes = {
  onButtonClickProfilUser: PropTypes.func.isRequired,
  onButtonClickValidation: PropTypes.func.isRequired,
  cards: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pseudo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    trajet: PropTypes.string.isRequired,
    //departure: PropTypes.string.isRequired, 
    //arrival: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
  })
}
export default Card;
