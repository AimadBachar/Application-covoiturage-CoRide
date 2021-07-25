// Import npm
import React from 'react';

// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Search from 'src/containers/Search';
import Footer from 'src/containers/Footer';
import Signin from 'src/containers/Signin';
import Card from 'src/containers/Card';
import Main from '../Main';
import Nav from '../Nav';
import ConnexionRegistration from '../ConnexionRegistration';
import NotFoundPage from '../NotFoundPage';
import ProfilUser from '../ProfilUser';
import Trip from '../Trip'


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
          <Trip 
          // data
          departure_city="city"
          destination_city="city"
          activity_id="activity"
          departure_timestamp="date"
          description="blabla"
          places_available="2"
          // fonctions
          onSubmitSearch={() => {
            console.log('trip created')
          }}

          onInputChange = {(value, name) => {
            console.log('change in ' + name + ' :', value);
          }}


          />
        </Route>

        <Route exact path="/connexion">
          <ConnexionRegistration />
        </Route>

        <Route exact path="/inscription">
          <Signin 
          //props
          isSignedIn={false} 
          signedMessage="Signin done !"
          lastname="nom"
          firstname="prénom"
          user="lolo@sasa.fr"
          password="password"
          birthdate="00/00/0000"
          // fonctions
          changeField= {(value, name) => {
            console.log('change in ' + name + ' :', value);
          }}
          handleSignin={() => {
            console.log('Signin')
          }}

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
            age="18"
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
