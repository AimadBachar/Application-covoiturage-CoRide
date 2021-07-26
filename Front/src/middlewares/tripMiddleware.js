import axios from 'axios';

import {
  ON_SUBMIT_CHANGE,
  onSubmitSearch,
  ON_INPUT_CHANGE,
  onInputChange
} from 'src/actions/nomdufichier';

const middleware = (store) => (next) => (action) => {
  // J'examine le type d'action, pour les CAS qui m'intéressent
  switch(action.type) {
    case ON_SUBMIT_CHANGE:
      
      // Je lance ma requête avec axios
      axios({
        method: 'post',
        url: 'http://18.235.248.88:3000/api/v1/travels​/user​/{id}'
      })
        .then((res) => {
          // axios met dans res.data la réponse du serveur
          console.log('Trip success', res.data);
          // J'ai besoin d'avoir une action pour informer le reducer que la requête s'est bien passée.
          // Si j'ai reçu une réponde du serveur, il y a de grandes chances pour que ça intéresse mon reducer.
          // Je vais donc mettre les données de ma réponse
          // dans l'objet d'action
          const actionToSend = onSubmitSearch(res.data);
          // Et je n'oublie pas de la dispatcher
          store.dispatch(actionToSend);

        })
        .catch((err) => {
          console.error(err);
          // J'ai besoin d'avoir une action pour informer le reducer que la requête s'est mal passée.
          const actionToSend = userLoginError();
          store.dispatch(actionToSend)
        });
    break;
  }
  next(action);
}

export default middleware;
