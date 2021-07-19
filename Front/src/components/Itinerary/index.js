import React from 'react';
// import PropTypes from 'prop-types';

// import iconLike from '/src/assets/images/pouce-en-l_air.png';
import './styles.scss';

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

// Card.proptypes = {

// };
export default Card;
