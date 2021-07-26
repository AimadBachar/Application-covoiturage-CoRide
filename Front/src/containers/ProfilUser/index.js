import { connect } from 'react-redux';
import ProfilUser from 'src/components/ProfilUser';

const mapStateToProps = (state) => ({ 

    isCompleted: false,
    profilCompletedMessage:"Signin done !",
    last_name:"nom",
    first_name:"prénom",
    pseudo:"username",
    email: "lolo@sasa.fr",
    password:"password",
    birthdate:"00/00/0000",
    coords:"adresse",
    city:"city",
    postcode:"0000",
    country:"country",
    brand:"typeCar",
    model:"modelCar",
    activity_id:"activity",

});
const mapDispatchToProps = (dispatch) => ({

    changeField: (value, name) => {
        console.log('change in ' + name + ' :', value);
      
    
    },

      handleProfil: () => {
        console.log('profil completed')
       // console.log(localStorage.getItem('tokens'));
        //const action = profilUser();
       // dispatch(action);
      },
      });  


export default connect(mapStateToProps, mapDispatchToProps)(ProfilUser);