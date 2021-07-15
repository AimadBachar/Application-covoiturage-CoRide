import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';


const Search = ({ 
    tags,
    onSelectChange,
    onInputChange,
    onDateChange,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit')
    };

return (
    <div className="search">
        <form className="search-form" 
            onSubmit={handleSubmit}>

            <select className="search-form_select" 
                name="sports"
                onChange={(evt) => {
                    const selectSport = evt.target.value;
                    onSelectChange(selectSport); 
                }}  
            >              
                <option 
                    className="search-form_select_title" 
                    value="">Quel sport ?
                </option>
                    {tags.map((tag) => (
                        <option 
                            key={tag.id} 
                            value={tag.sport}
                        >
                            {tag.sport}
                        </option>
                    ))}     
            </select>

            <input className="search-form_input" 
                    type="text" 
                    placeholder="Où pratiquer ?"
                     // value={props.textInput}
                    onChange={(evt) => {
                    const placeChose = evt.target.value;
                    onInputChange(placeChose);
                }}
            />

            <input className="search-form_date" 
                   type="date" 
                   name="trip-start" 
                   onChange={(evt) => {
                    const dateSearch = evt.target.value;
                    onDateChange(dateSearch); 
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
