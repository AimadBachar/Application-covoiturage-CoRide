import { connect } from 'react-redux';
import ProfilUser from 'src/components/ProfilUser';

const mapStateToProps = (state) => ({ 

    isCompleted: false,
    profilCompletedMessage:"Signin done !",
    lastname:"nom",
    firstname:"prénom",
    pseudo:"username",
    user: "lolo@sasa.fr",
    password:"password",
    birthdate:"00/00/0000",
    adress:"adresse",
    city:"city",
    codeZip:"codeZip",
    country:"country",
    typeCar:"typeCar",
    modelCar:"modelCar",
    activity_id:"activity",

});
const mapDispatchToProps = (dispatch) => ({

    changeField: (value, name) => {
        console.log('change in ' + name + ' :', value);
      
     // const action = userProfilInputChange({
       // [name]: value,
     // });
     // dispatch(action);
    },

      handleProfil: () => {
        console.log('profil')
       // console.log(localStorage.getItem('tokens'));
        //const action = profilUser();
       // dispatch(action);
      },
      });  


export default connect(mapStateToProps, mapDispatchToProps)(ProfilUser);