import React from 'react';
import PropTypes from 'prop-types';
import loupe from '/src/assets/images/loupe white 2.png';


import './styles.scss';

const Search = ({
  tags,
  departure,
  arrival,
  sport,
  date,
  onInputChange,
  onSubmitSearch
}) => {
  const handleSubmit = (evt) => {
    //evt.preventDefault();
    console.log('submit', evt.target.value);
    onSubmitSearch();
  };
  const fieldChange = (evt) => {
    evt.preventDefault();
    console.log(evt.target.value);
    const value = evt.target.value;
    onInputChange(evt.target.name, value )
  }

  return (
    <div className="search">
      <form
        action="/results"
        method="POST"
        className="search-form"
        onSubmit={handleSubmit}
      >

        <input
          className="search-form_input depart"
          type="text"
          name="departure"
          placeholder="Départ"
          value={departure}
          onChange={fieldChange}
        />

        <input
          className="search-form_input destination"
          type="text"
          name="arrival"
          placeholder="Destination"
          value={arrival}
          onChange={fieldChange}
        />
        <div className="search-form_sport__date">
          <select
            className="search-form_select"
            name="sport"
            onChange={fieldChange}
          >
            <option
              className="search-form_select_title"
              value={sport}
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
            onChange={fieldChange}
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
  onInputChange: PropTypes.func.isRequired,
  tag: PropTypes.shape({
    sport: PropTypes.string.isRequired,
  })
}

export default Search;
