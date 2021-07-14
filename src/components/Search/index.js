import React from 'react';

import './styles.scss';

const Search = () => (
    <div className="search">
        <form className="search-form">
            <select className="search-form_select" name="pets">
              <option className="search-form_select_title" value="">Quel sport ?</option>
              <option value="dog">kite</option>
              <option value="cat">surf</option>
              <option value="hamster">skate</option>
              <option value="parrot">windsurf</option>    
              <option value="spider">Ski</option>
              <option value="goldfish">roller</option>
            </select>

            <input className="search-form_input" type="text" placeholder="Où pratiquer ?"/>

            <input className="search-form_date" type="date" name="trip-start" />
            
            <button type="submit" className="search-form_submit">Rechercher</button>
        </form>
    </div>
);

export default Search;
