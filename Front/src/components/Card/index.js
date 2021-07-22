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
        <div className="card-top">
          <div className="card-top_left">
            {/* <img className="card-like" src={iconLike} alt="icon-like" /> */}
            <a href="#" className="card-profil" onClick={onButtonClickProfilUser}>{card.driver}</a>
          </div>
          <div className="card-top_right">
            <p className="card-date">{card.departure_timestamp}</p>
            <p className="card-hour">heure</p>
          </div>
        </div>
        <p className="card-destination">Départ: {card.departure_city}</p>
        <p className="card-destination">Arrivée: {card.destination_city}</p>
        <div className="card-bottom">
          <span className="card-tag">{card.activity}</span>
          <button className="card-button" type="button" onClick={onButtonClickValidation}>GO !</button>
        </div>
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
