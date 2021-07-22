// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Main from '../Main';
import ConnexionRegistration from '../ConnexionRegistration';
import Signin from 'src/components/ConnexionRegistration/Signin';


import NotFoundPage from '../NotFoundPage';


import './styles.scss';

// console.log(localStorage.getItem('token'));

// == Composant
const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Search />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/connexion">
          <ConnexionRegistration />
        </Route>
        
        <Route exact path="/inscription">
          <Signin />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

// == Export
export default App;

