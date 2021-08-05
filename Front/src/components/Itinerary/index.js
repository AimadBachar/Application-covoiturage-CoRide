// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const Card = ({
  cards,
}) => (
  <div>
    {cards.map((card) => (
      <div className="card" key={card.id}>
        <p className="card-destination">
          {card.trajet}
        </p>
      </div>
    ))}
  </div>
);

Card.proptypes = {
  cards: PropTypes.string,
};

// == Export
export default Card;
