// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Main from '../Main';
import ConnexionRegistration from '../ConnexionRegistration';
import NotFoundPage from '../NotFoundPage';
import ProfilUser from '../ProfilUser';

import './styles.scss';

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

        <Route exact path="/profil">
          <ProfilUser />
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
