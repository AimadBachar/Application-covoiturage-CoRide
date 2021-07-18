// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Main from '../Main';
import Footer from '../Footer';
import LoginForm from '../LoginForm';


import './styles.scss';

// == Composant
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/LoginForm" component={LoginForm} />
      <div className="app">

        <Header />

        <Search />

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
    </Switch>
  </Router>
);

// == Export
export default App;
