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
