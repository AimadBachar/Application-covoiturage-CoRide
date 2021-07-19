import React from 'react';
// import PropTypes from 'prop-types';
import loupe from '/src/assets/images/loupe white 2.png';

import './styles.scss';

const Search = ({
  tags,
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
        className="search-form"
        onSubmit={handleSubmit}
      >

        <input
          className="search-form_input depart"
          type="text"
          name="depart"
          placeholder="Départ"
                     // value={props.textInput}
          onChange={(evt) => {
            const placeChose = evt.target.value;
            onInputChange(placeChose);
          }}
        />

        <input
          className="search-form_input destination"
          type="text"
          name="arrivé"
          placeholder="Destination"
                     // value={props.textInput}
          onChange={(evt) => {
            const placeChose = evt.target.value;
            onInputChange(placeChose);
          }}
        />
        <div className="search-form_sport__date">
          <select
            className="search-form_select"
            name="sports"
            onChange={(evt) => {
              const selectSport = evt.target.value;
              onSelectChange(selectSport);
            }}
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
            placeholder="aujourd'hui"
            onChange={(evt) => {
              const dateSearch = evt.target.value;
              onDateChange(dateSearch);
            }}
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

export default Search;
