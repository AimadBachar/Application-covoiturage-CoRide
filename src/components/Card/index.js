import React from 'react';
import PropTypes from 'prop-types';

import iconLike from '/src/assets/images/pouce-en-l_air.png';

const Card = () => (
    <div className="card">
      <img className="card-like" src={iconLike} alt="icon-like"/>
    </div>
);

Card.proptypes = {

};
export default Card;
