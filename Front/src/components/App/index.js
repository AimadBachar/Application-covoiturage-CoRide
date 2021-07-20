// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Main from '../Main';
import Footer from 'src/containers/Footer';
import ConnexionRegistration from '../ConnexionRegistration';
import Card from 'src/containers/Card';

//Fake Data
//import dataCards from "../../data/data_sport";

import './styles.scss';

// == Composant
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/connexion">
        <ConnexionRegistration /> 
      </Route>
      <Route exact path="/results">
        <Header />
        <Search />
        <Card />
        <Footer />
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

/* LoginForm

 email="me@mail.com"
      password="123"
      isLogged={false}
      loggedMessage="Welcome user"
      changeField= {(value, name) => {
        console.log('change in ' + name + ' :', value);
      }}
      handleLogin={() => {
        console.log('login')
      }}
      handleLogout={() => {
        console.log('logout')
      }}
*/
