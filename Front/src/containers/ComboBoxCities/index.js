import {connect} from 'react-redux';
import ComboBoxCities from 'src/components/ComboBoxCities';
import { fetchSearchCity,searchInputsCoords } from 'src/actions/comboBoxCities';
// import datas


const mapStateToProps = (state) => ({
    resultsFetch: state.comboBoxCities.resultsFetch,
    departure_city: state.comboBoxCities.departure_city,
    long: state.comboBoxCities.long,
    lat: state.comboBoxCities.lat
});

const mapDispatchToProps = (dispatch) => ({  

    onInputCityChange:(name,city)=>{
      const action = fetchSearchCity(city);
      action.name = name;
      console.log("name",name)
      dispatch(action);
    },

    onSubmitSearch: (value) => {
      //console.log('submit');
      const action = searchSubmit();
      dispatch(action)
    },

    onInputsCoords:(obj)=>{
      const action = searchInputsCoords(obj);
      dispatch(action);
    },
    onInputChange: (name, value) => {
      //console.log('ton lieu de pratique est', name , value);
      const action = searchInputChange(value);
      action.name = name;
      dispatch(action)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ComboBoxCities);
