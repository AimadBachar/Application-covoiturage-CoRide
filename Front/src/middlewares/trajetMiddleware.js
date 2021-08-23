import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { 
  SEARCH_SUCCESS, 
  searchSubmitSucces, 
  FETCH_TRAVELS, 
  fetchTravelsSuccess,
  FETCH_ONE_TRAVEL,
  searchFormDisplay,
  PARTICIPE_TRAVEL,
  particpeTravelSucces,
  FETCH_PROFIL_DRIVER,
} from '../actions/trajets';

import { activeModal } from "src/actions/modalInfo";
import { updateUser } from '../actions/user';



export default (store) => (next) => (action) => {
  switch(action.type) {     
    case SEARCH_SUCCESS:

      const inputs = store.getState().trajets.inputs;
      const longitude = store.getState().comboBoxCities.long;
      const latitude = store.getState().comboBoxCities.lat;
     
      if(store.getState().comboBoxCities.destination_city){
      inputs.destination_city = store.getState().comboBoxCities.destination_city;
      }

      if(longitude && latitude){
        inputs.long = longitude;
        inputs.lat = latitude;
      }

      /* console.log(inputs); */
      let fetchUrl = "http://18.235.248.88:3000/api/v1/travels";

      let count = 0;

      //on vérifie la présence de values dans chaque key de l'objet inputs
      //si il y a une valeure on incrèmente notre compteur
      for(const key in inputs){
        if(inputs[key] == ""){
          continue;
        }else{
          count++;
        }
      }

      // si le compteur est different de 0 alors il y a des filtres de recherche donc on ajoute /search? à l'url
      if(count !== 0){ 
        fetchUrl += "/search?"
      };

      //on boucle sur l'objet inputs afin de construire la chaine filtres à passer en query string
      for(const key of Object.keys(inputs)){
          //on complèete la chaine de carctère uniquement si il y a une valeure
          if(inputs[key]!==""){
            fetchUrl += `${key}=${inputs[key]}`;
            //on ajoute le symbol & entre 2 filtres SAUF sur le dernier
            if(Object.keys(inputs).indexOf(key) < Object.keys(inputs).length-1){
              fetchUrl += "&"
            }
          }
      }

      console.log(fetchUrl)

      axios({
        method: 'GET',
        url: fetchUrl
      })
        .then((res) => {
          console.log("res.data", res.data);
          //console.log(departure);
          const actionToSend = searchSubmitSucces(res.data);
          store.dispatch(actionToSend);
              
        })
        .catch((err) => {
          console.error(err);
        })

      
    break;
    case FETCH_TRAVELS:

      const id = store.getState().id;
      console.log(id);
      const coords = action.payload;
      console.log("coords",coords)
      // Je lance la requête
      axios({
        method: 'get',
        url: `http://18.235.248.88:3000/api/v1/travels/search?long=${coords.latitude}&lat=${coords.longitude}`
      })
        .then((res) => {
          /* console.log("fetch_succes", res.data); */
          const action = fetchTravelsSuccess(res.data);
          store.dispatch(action);
        })
        .catch((err) => {
          console.error(err);
        });

        axios({
          method: 'get',
          url: 'http://18.235.248.88:3000/api/v1/activities'
        })
          .then((res) => {
            /* console.log("fetch_succes", res.data); */
            const action = searchFormDisplay(res.data);
            store.dispatch(action);
          })
          .catch((err) => {
            console.error(err);
          })

    break;
    case PARTICIPE_TRAVEL:
      console.log('participe traval succes in middleware', action.payload);
      const { id : travelId } = action.payload;
      console.log("travelID", travelId);

      const objData = { id : travelId};

      let token = JSON.parse(localStorage.getItem('tokens'));
      /* console.log("token",token); */
      const {id : userId, pseudo} = token;
      console.log("userID",userId);
      const participeUrl = "http://18.235.248.88:3000/api/v1/user/";
      
      // Je lance la requête
      axios({
        method: 'post',
        url: participeUrl + userId + "/travels",
        data: JSON.stringify(objData),
        headers: { 
          "content-Type" : "application/JSON",
          Authorization: `Bearer ${token.token}`
         }
      })
      .then( async (res) => {
          console.log("participe travel succes", res.data);
          const action = particpeTravelSucces(res.data);
          const updateTravels = await axios({
            method:"GET",
            url:`http://18.235.248.88:3000/api/v1/user/${userId}`,
            headers:{
              "Authorization":`Barer ${token.token}`
            }
          });

          localStorage.removeItem("tokens");
          updateTravels.data.token = token.token;
          localStorage.setItem("tokens",JSON.stringify(updateTravels.data));

          const success = activeModal({
            header:"Félicitation!",
            message:`Votre participation au covoiturage de ${pseudo} est validé!`
          })
          store.dispatch(action);
          store.dispatch(updateUser(updateTravels.data));
          store.dispatch(success);
        })
        .catch((err) => {
          console.error(err);
          const error = activeModal({
            header:"Attention",
            message:`Nous n'avons pas pu valider votre particpation car vous êtes déjà inscrit ou vous avez créer le trajet.`
          });
          store.dispatch(error);
        })
    break; 
}
next(action);
};
