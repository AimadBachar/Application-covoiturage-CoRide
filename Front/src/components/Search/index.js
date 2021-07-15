import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';


const Search = ({ 
    selectedSport,
    placeChose,
    dateSearch,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
    };

return (
    <div className="search">
        <form className="search-form" 
        onSubmit={handleSubmit}>

            <select className="search-form_select" 
                    name="sports"
                    onChange={(evt) => {
                    const selectSport = evt.target.value;
                    props.onSelectChange(selectSport); 
                }}  
            >              
                <option className="search-form_select_title" 
                        value="">Quel sport ?</option>
                            <option value="kite">kite</option>
                            <option value="surf">surf</option>
                            <option value="skate">skate</option>
                            <option value="windsurf">windsurf</option>    
                            <option value="ski">Ski</option>
                            <option value="roller">roller</option>
            </select>

            <input className="search-form_input" 
                    type="text" 
                    placeholder="Où pratiquer ?"
                     // value={props.textInput}
                    onChange={(evt) => {
                    const placeChose = evt.target.value;
                    props.onInputChange(placeChose);
                }}
            />

            <input className="search-form_date" 
                   type="date" 
                   name="trip-start" 
                   onChange={(evt) => {
                    const dateSearch = evt.target.value;
                    props.onDateChange(dateSearch); 
                }}  
            />
            
            <button type="submit" 
                    className="search-form_submit">
                    Rechercher
            </button>
        </form>
    </div>
);
};  

export default Search;
