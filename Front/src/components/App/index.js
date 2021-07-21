// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Main from '../Main';
import ConnexionRegistration from '../ConnexionRegistration';

import './styles.scss';

// console.log(localStorage.getItem('token'));

// == Composant
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/connexion">
        <ConnexionRegistration />
      </Route>
      <div className="app">
        <Header />

        <Search />

        <Main />

        <Footer />

      </div>
    </Switch>
  </Router>
);

// == Export
export default App;
