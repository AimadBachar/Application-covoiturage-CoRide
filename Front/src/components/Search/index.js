import React from 'react';

import './styles.scss';

const Search = (props) => (
    <div className="search">
        <form className="search-form" onSubmit={(evt)=>{
            evt.preventDefault();
            props.onSubmitSearch();
        }}>
            <select className="search-form_select" name="sports"
                onChange={(evt) => {
                    const select = evt.target.value;
                    props.onSelectChange(select); 
                }}  
            >              
                <option className="search-form_select_title" value="">Quel sport ?</option>
                <option value="kite">kite</option>
                <option value="surf">surf</option>
                <option value="skate">skate</option>
                <option value="windsurf">windsurf</option>    
                <option value="ski">Ski</option>
                <option value="roller">roller</option>
            </select>

            <input className="search-form_input" type="text" placeholder="Où pratiquer ?"
                // value={props.textInput}
                onChange={(evt) => {
                    const textSaisi = evt.target.value;
                    props.onInputChange(textSaisi);
                }}
            />

            <input className="search-form_date" type="date" name="trip-start" 
                onChange={(evt) => {
                    const date = evt.target.value;
                    props.onDateChange(date); 
                }}  
            />
            
            <button type="submit" className="search-form_submit">
                Rechercher
            </button>
        </form>
    </div>
);

export default Search;
