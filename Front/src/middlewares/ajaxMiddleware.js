// == import axios
import axios from 'axios';

// Import des actions
import {
  USER_LOGIN,
  userLoginSuccess,
} from 'src/actions/user';

// export default (store) => (next) => (action) => {
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Lancer une requête avec axios
    // pour demander les profils favoris
    // j'ai donc besoin de dire à mon serveur
    // qui je suis (lui donner le token - bracelet).
    // Pour fournir ce token, je dois dans mes requêtes
    // renseigner un header AUTHORIZATION avec comme valeur
    // Bearer letokendelutilisateur

    // pour stocker les token
    // utiliser local storage

    // Lancer une requête axios
    // pour demander que l utilisateur puisse se connecter
    case USER_LOGIN:
    // pour transmettre des en têtes personnalisés
    // mettre objet en tête et le mettre en dernier argument
    // et modifier la requête axios

      /* const axiosConfigured = axios.create({
        headers: {'Authorization': `Bearer ${action.payload.token}`}
      }); */

      // Requête POST sur api/users en envoyant les datas
      axios({
        method: 'post',
        // url: 'http://localhost:3001/login',
        url: 'http://18.235.248.88:3000/api/v1/user/login/',
        data: store.getState().user.inputs,
        // name: store.getState().user.userId,
      },
      // Sans instance préconfigurée, je renseigne le header directement dans la requête
      // (à faire pour toutes les requêtes)
      {
        headers: { Authorization: `Bearer ${store.getState().user.token}` },
      })
        .then((res) => {
          console.log('res.data', res.data.userId);
          const {
            token, userId, firstName, lastName,
          } = res.data;

          // const tokens = await connect(user, password);
          // local storage mis en place
          // localStorage.setItem('tokens', res.data.firstName);
           localStorage.clear();
          localStorage.setItem('tokens', JSON.stringify(res.data));

          const actionToSend = userLoginSuccess(res.data);
          store.dispatch(actionToSend);

          // },
          /*
          async function connect(user, password) {
            const headers = new Headers();
            headers.append('Content-Type', 'application/userId');

            const options = {
              method: 'POST',
              mode: 'cors',
              body: res.data.token({
                user,
                password
              }),
              headers
            };
          */
          // const response = fetch('http://18.235.248.88:3000/api/v1/user/userId');
          // return response.res.data.token();
        })

        .catch((err) => {
          console.error(err);
        });
      break;
  }
  next(action);
};
export default middleware;
// Link du serveur admin
// admin:  http://18.235.248.88:3001/login

// link de l'API
// api:  http://18.235.248.88:3000/api-docs

// user + mdp de l'admin
/* user: corideApp
mdp: BackForLife
*/

//
// requête POST sur admin/login en envoyant les datas
/*  axios({
        method: 'post',
        url: 'http://18.235.248.88:3000/login',
        headers:{"Contente-Type":"application/json"},
        data: JSON.stringify(loginAdmin)
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    break; */
