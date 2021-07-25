une fois le composant terminé avec les props
vérifier les fonctionnalités du composant avec l'affichage en console
tu dois voir le nom des fonctions au clic ou en écrivant dans les inputs
si c'est ok tu vas pouvoir passer à la partie REDUX


**d'abord dans CONTAINERS**
tu vas créer le container de ton composant avec un index.js
-la base est la suivante:

import { connect } from 'react-redux';
import Signin from 'src/components/NOMDUCOMPOSANT';


const mapStateToProps = (state) => ({
  
  });
const mapDispatchToProps = (dispatch) => ({
    
  });

export default connect(mapStateToProps, mapDispatchToProps)(NOMDUCOMPOSANT);


---dans APP.index.js tu change le chemin du composant avec le nouveau chemin 
ex: import Signin from 'src/components/Signin';
    import Signin from 'src/container/Signin';

tu relances yarn start pour vérifier que ton composant est bien passé côté redux

