// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Search from '../Search';
import Main from '../Main';
import Footer from '../Footer';

import dataTags from '/src/data/data_tag.js';

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
      tags={dataTags}

       onSelectChange={(selectedSport) => {
        console.log('tu as choisi le', selectedSport);
      }}
      textInput="Où pratiquer ?"
      onInputChange={(placeChose) => {
        console.log('ton lieu de pratique est', placeChose);
      }} 
      onDateChange={(dateSearch) => {
        console.log('la date selectionnée est le', dateSearch);
      }}
      onSubmitSearch={()=>{
        console.log("submit");
      }}
    />

    <Main />

    <Footer 
        onButtonClickInstagram={() => {
        console.log('clic sur le lien Instagram');
      }}
      onButtonClickFacebook={() => {
        console.log('clic sur le lien Facebook');
      }}
      onButtonClickTwitter={() => {
        console.log('clic sur le lien Twitter');
      }}
      onButtonClickMentions={() => {
        console.log('clic sur nos mentions légales');
      }}
      onButtonClickContact={() => {
        console.log('clic pour nous contacter');
      }}
    />
  </div>
);

// == Export
export default App;
