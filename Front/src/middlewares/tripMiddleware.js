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

const middleware = (store) => (next) => (action) => {
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

      const user = JSON.parse(localStorage.getItem('tokens'));
      
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
        data: inputs,
        headers: { Authorization: `Bearer ${user.token}` },
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
          // Et je n'oublie pas de la dispatcher
          store.dispatch(actionToSend);
        })
        .catch((err) => {
          console.error('erreur:', err);
          // J'ai besoin d'avoir une action pour informer le reducer que la requête s'est mal passée.
          /*const actionToSend = userLoginError();
          store.dispatch(actionToSend) */
        });
      break;
  }
  next(action);
};

export default middleware;
