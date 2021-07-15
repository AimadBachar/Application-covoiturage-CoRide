// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Search from '../Search';
import Main from '../Main';
import Footer from '../Footer';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header 
      onButtonClickMenu={() => {
        console.log('clic sur le menu');
      }}
      onButtonClickLogin={() => {
        console.log('clic sur le login');
      }}
    />
    <Search 
      onSelectChange={(selected) => {
        console.log('tu as choisi le', selected);
      }}

      textInput="Où pratiquer ?"
      onInputChange={(textSaisi) => {
        console.log('change', textSaisi);
      }} 

      onDateChange={(date) => {
        console.log('la date selectionnée', date);
      
      }}

      onSubmitSearch={()=>{
        console.log("submit");
      }}
    />
    <Main />
    <Footer />
  </div>
);

// == Export
export default App;
