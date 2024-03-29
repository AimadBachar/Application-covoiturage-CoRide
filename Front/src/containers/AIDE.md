## passage REDUX
tu peux te faire un commit entre chaque étape

une fois le composant terminé avec les props
vérifier les fonctionnalités du composant avec l'affichage en console
tu dois voir le nom des fonctions au clic ou en écrivant dans les inputs
si c'est ok tu vas pouvoir passer à la partie REDUX


**d'abord dans CONTAINERS**
**etape 1**
tu vas créer le container de ton composant avec un index.js
-la base est la suivante:
-----------------------------------------------------------------
import { connect } from 'react-redux';
import Signin from 'src/components/NOMDUCOMPOSANT';

const mapStateToProps = (state) => ({ });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NOMDUCOMPOSANT);
-------------------------------------------------------------------

--dans APP.index.js tu change le chemin du composant avec le nouveau chemin 
ex: import Signin from 'src/components/Signin';
    import Signin from 'src/container/Signin';

tu relances yarn start pour vérifier que ton composant est bien passé côté redux

**etape2**
--tu vas maintenant copier/coller les datas et fonctions qui se trouvent dans APP index.js (tu ne les supprimes pas de suite de APP, juste COPIER/coller)
ça te permettra de voir quelles données ou actions te manquent.

--tu copies/colles les DATA dans 
const mapStateToProps = (state) => ({ });
(remplacer "=" par ":")
(ne pas oublier les virgules entre chaque data)
(si tu as des boolean tu ecris comme ça sans parenthèses: isSigned: true,)

--tu copies/colles les fonctions dans
const mapDispatchToProps = (dispatch) => ({});
(ta fonction va servir à dispatcher les actions que tu vas créer)
ex: 
COPIER
--------------------------
handleSignin={() => {
        console.log('Signin')
      }}
COLLER (avec petit modification de la structure)
------------------------
handleSignin: () => {
        console.log('Signin')
      }

--tu relances yarn start pour vérifier (dans la console) que tu as bien copier coller tes datas et fonctions côté redux

**étape 3**
--tu vas devoir parametrer ton state
--pour cela tu vas créer un reducer dans le dossier "REDUCERS" 
exemple : usersignin.js
--tu peux importer ton reducer dans l'index.js de REDUCERS

structure du fichier.js reducer avec ex de state
----------------
export const initialState = {
    logged: false,
    loggedMessage: 'Welcome !',
    inputs: {
      // user: 'laurent@savarit.fr',
      // password: '1234',
    }
    },

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
-----------------------------
--en parallele tu changes ton state ds le container 
--ds cet ex tu recuperes le user et password ds le state du reducer usersignin:

    user: state.usersignin.inputs.user,
    password: state.usersignin.inputs.password,

--tu relances yarn start pour vérifier (dans la console) que tu as bien recup les fausses datas du state

--si c'est ok
--tu peux supprimer ou commenter les datas dans APP index.js

**etape 4**
-- maintenant tu vas t'occuper des actions
--dans le dossier ACTIONS
--exemple : usersignin.js

--quelles fonctions a besoin ton container TRIP? 
--Quelles actions il a?
---------------
exemple:
export const USER_SIGNIN = 'USER_SIGNIN';

export const userSignin = () => ({
  type: USER_SIGNIN,
});
------------------------------------------


* note : si tu as plus d actions que nécessaire ce n'est pas grave
       tu vas dispatcher celles dont tu auras besoin 

**etape 5**
--tes actions prêtes
--tu vas pouvoir les injecter dans le REDUCER 

--tu as le squelette du reducer en place
--au dessus d'export const initialState
--tu peux importer tes actions

--en dessous de switch tu vas injecter tes actions
(voir ex ds le dossier REDUCERS)

**etape 6**
--tu peux dispatcher tes actions dans les fonctions
--dans le container 
-- ne pas oublier // == Import des actions
//import { noms des actions qui sont en minuscules } from 'src/actions/user';

--tu verifies encore une fois que ça fonctionne
--dans la console tu vas dans REDUX  et ACTION
--il faut écrire ds tes input et les boutons
-- si c est ok tes actions vont s afficher 
-- dans ce cas tu peux supprimer ou commenter tes fonctions dans APP index.js

**ETAPE 7**
--tu peux créer un middleware dans le dossier MIDDLEWARES
--exemple: signinMiddleware.js

--voici l ossature du middleware

import axios from 'axios';
import {ACTION EN MAJUSCULE, action en minuscule} 
from 'src/actions/nomdufichier';

const middleware (store) => (next) => (action) => {
  // J'examine le type d'action, pour les CAS qui m'intéressent
  switch(action.type) {
   case FETCH_RECIPES:
     // Je lance ma requête avec axios
     axios({
       method: 'get',
       url: 'http://monapi.com/maroute'
     })
      .then((res) => {
        // axios met dans res.data la réponse du serveur
        console.log(res.data);
        // J'ai besoin d'avoir une action pour informer le reducer que la requête s'est bien passée.
        // Si j'ai reçu une réponde du serveur, il y a de grandes chances pour que ça intéresse mon reducer.
        // Je vais donc mettre les données de ma réponse
        // dans l'objet d'action
        const actionToSend = userLoginSuccess(res.data);
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

