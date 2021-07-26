// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Signin from 'src/containers/Signin';
import ProfilUser from 'src/containers/ProfilUser';
import Card from 'src/containers/Card';
import Main from '../Main';
import Nav from '../Nav';
import ConnexionRegistration from '../ConnexionRegistration';
import NotFoundPage from '../NotFoundPage';

import Trip from 'src/containers/Trip'


import Loading from './Loading';

import './styles.scss';
import { useEffect } from 'react';


const App = ({loading, fetchTravels}) => {
  // J'exécute la fonction reçue en props
  // dés que je suis prêt, et une seule fois
  useEffect(fetchTravels, [])

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="app">
      <Switch>

      <Route exact path="/">
          <Header />
          <Search />
          <Card />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/trip">
          <Trip />
        </Route>

        <Route exact path="/connexion">
          <ConnexionRegistration />
        </Route>

        <Route exact path="/inscription">
          <Signin 
          //props
        /*  isSignedIn={false} 
          signedMessage="Signin done !"
          lastname="nom"
          firstname="prénom"
          user="lolo@sasa.fr"
          password="password"
          birthdate="00/00/0000"*/
          // fonctions
         /* changeField= {(value, name) => {
            console.log('change in ' + name + ' :', value);
          }}
          handleSignin={() => {
            console.log('Signin')
          }}*/

          />
        </Route>

        <Route exact path="/profil">
          <ProfilUser
           //props
            isCompleted={false} 
            profilCompletedMessage="Signin done !"
            lastname="nom"
            firstname="prénom"
            pseudo="username"
            user="lolo@sasa.fr"
            password="password"
            date="00/00/0000"
            adress="adresse"
            city="city"
            codeZip="codeZip"
            country="country"
            typeCar="typeCar"
            modelCar="modelCar"
            activity_id="activity"
            // fonctions
            changeField= {(value, name) => {
              console.log('change in ' + name + ' :', value);
            }}
            handleProfil={() => {
              console.log('profil')
            }}         
           />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>

      </Switch>
      </div>
    </Router>
  );
};


// == Export
export default App;
