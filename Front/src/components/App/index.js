// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Main from '../Main';
import Footer from 'src/containers/Footer';
import LoginForm from '../LoginForm';


import './styles.scss';

// == Composant
const App = () => (
  <Router>
    <Switch>
      <div>
        <Route exact path="/LoginForm">
            <LoginForm  /> 
        </Route>

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
