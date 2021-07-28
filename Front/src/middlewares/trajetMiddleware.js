 // == import axios
import axios from 'axios';
import { useLocation } from 'react-router-dom';



import { 
  SEARCH_SUCCESS, 
  searchSubmitSucces, 
  FETCH_TRAVELS, 
  fetchTravelsSuccess,
  FETCH_ONE_TRAVEL,
  searchFormDisplay

} from '../actions/trajets';



export default (store) => (next) => (action) => {
  switch(action.type) {     
    case SEARCH_SUCCESS:

      const inputs = store.getState().trajets.inputs;
      const longitude = store.getState().comboBoxCities.long;
      const latitude = store.getState().comboBoxCities.lat;

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
      // Je lance la requête
      axios({
        method: 'get',
        url: 'http://18.235.248.88:3000/api/v1/travels'
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

    
   /*  case FETCH_ONE_TRAVEL:
      const query = new URLSearchParams(useLocation().search)
      const idRoad = query.get('id');
      console.log(id);
      // Je lance la requête
      axios({
        method: 'get',
        url: `http://18.235.248.88:3000/api/v1/travels/${idRoad}`
      })
        .then((res) => {
          console.log("fetch_travel", res.data);
          const action = fetchTravelsSuccess(res.data);
          store.dispatch(action);
        })
        .catch((err) => {
          console.error(err);
        })
    break; */
}
next(action);
}
 