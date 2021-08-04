import axios from 'axios';

import {
  TRIP_SUCCES,
  tripSucces,
  ON_INPUT_CHANGE,
  onInputChange,
  FETCH_ACTIVITIES,
  fetchSuccessActivities,
  ON_SUBMIT_TRIP,
} from 'src/actions/trip.js';

import { updateUser } from 'src/actions/user';
import {updateTravels} from 'src/actions/trajets';

import { activeModal } from "src/actions/modalInfo";

const middleware = (store) => (next) => (action) => {

  let user = JSON.parse(localStorage.getItem('tokens'));
  // J'examine le type d'action, pour les CAS qui m'intéressent
  switch (action.type) {
    case FETCH_ACTIVITIES:
      axios({
        method: 'get',
        url: 'http://18.235.248.88:3000/api/v1/activities',
      })

        .then((res) => {
          console.log(res.data);
          const fetchActivities = fetchSuccessActivities(res.data);
          store.dispatch(fetchActivities);
        })
        .catch((err) => {
          console.error('erreur:', err);
        });

      break;

    case ON_SUBMIT_TRIP:
      
      const { inputs } = store.getState().trip;
      inputs.user_id = user.id;

      inputs.longitude_departure = store.getState().comboBoxCities.long;
      inputs.latitude_departure = store.getState().comboBoxCities.lat;
      inputs.departure_city = store.getState().comboBoxCities.departure_city;
      inputs.destination_city = store.getState().comboBoxCities.destination_city;
      
      console.log(inputs);

      const fetchUrl = 'http://18.235.248.88:3000/api/v1/travels/user/';
   
      // Je lance ma requête avec axios
      axios({
        method: 'post',
        url: fetchUrl + user.id,
        data: JSON.stringify(inputs),
        headers: { 
          'Content-Type':'application/json',
          Authorization: `Bearer ${user.token}` 
        },
      })

        .then((res) => {
          // console.log(store.getState().user.inputs);
          // axios met dans res.data la réponse du serveur
          console.log('Trip success', res.data);
          // J'ai besoin d'avoir une action pour informer le reducer que la requête s'est bien passée.
          // Si j'ai reçu une réponde du serveur, il y a de grandes chances pour que ça intéresse mon reducer.
          // Je vais donc mettre les données de ma réponse
          // dans l'objet d'action
          const actionToSend = tripSucces(res.data);

          user.travels_driver.push(res.data);
          localStorage.removeItem('tokens');
          localStorage.setItem('tokens',JSON.stringify(user));

          const success = activeModal({
            header:"Félicitation!",
            message:"Votre offre de covoiturage est en ligne!"
          })
          // Et je n'oublie pas de la dispatcher
          store.dispatch(actionToSend);
          store.dispatch(updateUser(user));
          store.dispatch(updateTravels(res.data));
          store.dispatch(success);
        })
        .catch((err) => {
          console.error('erreur:', err);
          const error = activeModal({
            header:"Attention",
            message:"Nous n'avons pas pu valider votre offre de covoiturage, une erreur s'est produite."
          });
          store.dispatch(error);
          // J'ai besoin d'avoir une action pour informer le reducer que la requête s'est mal passée.
          /*const actionToSend = userLoginError();
          store.dispatch(actionToSend) */
        });
      break;
  }
  next(action);
};

export default middleware;
