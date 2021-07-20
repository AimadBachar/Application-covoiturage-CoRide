import React from 'react';
import PropTypes from 'prop-types';
import loupe from '/src/assets/images/loupe white 2.png';


import './styles.scss';

const Search = ({
  cards,
  tags,
  departure,
  arrival,
  sport,
  date,
  onSelectChange,
  onInputChange,
  onDateChange,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
  };

  return (
    <div className="search">
      <form
        action="/results"
        method="GET"
        className="search-form"
        onSubmit={handleSubmit}
      >

        <input
          className="search-form_input depart"
          type="text"
          name="depart"
          placeholder="Départ"
          value={departure}
          onChange={onInputChange}
        />

        <input
          className="search-form_input destination"
          type="text"
          name="arrivé"
          placeholder="Destination"
          value={arrival}
          onChange={onInputChange}
        />
        <div className="search-form_sport__date">
          <select
            className="search-form_select"
            name="sports"
            value={sport}
            onChange={onSelectChange}
          >
            <option
              className="search-form_select_title"
              value=""
            >Quel sport ?
            </option>
            {tags.map((tag) => (
              <option
                name="tag"
                key={tag.id}
                value={tag.sport}
              >
                {tag.sport}
              </option>
            ))}
          </select>
          <input
            className="search-form_date"
            type="date"
            name="date"
            value={date}
            placeholder="aujourd'hui"
            onChange={onDateChange}
          />
        </div>
        <button
          type="submit"
          className="search-form_submit"
        >
          <img className="loupe" src={loupe} alt="loupe" />
        </button>
      </form>
    </div>
  );
};


Search.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  tags: PropTypes.shape({
    sport: PropTypes.string.isRequired,
  })
}

export default Search;
