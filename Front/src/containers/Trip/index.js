import { connect } from 'react-redux';
import Trip from 'src/components/Trip';
import { onSubmitTrip, tripSucces, onInputChange,fetchActivities } from 'src/actions/trip';

const mapStateToProps = (state) => ({
  tags: state.trip.tags,
  departure_city: state.comboBoxCities.departure_city,
  longitude_departure: state.comboBoxCities.long,
  latitute_departure: state.comboBoxCities.lat,
  destination_city: state.comboBoxCities.destination_city,
  activity_id: state.trip.inputs.activity_id,
  departure_timestamp: state.trip.inputs.departure_timestamp,
  description: state.trip.inputs.description,
  places_available: state.trip.inputs.places_available,
});

const mapDispatchToProps = (dispatch) => ({

  handleFetchActivities:()=>{
    console.log("plouf");
    const action = fetchActivities();
    dispatch(action);
  },

  onSubmitSearch:() => {
    console.log('trip created')
    const action = tripSucces();
    dispatch(action);
  },

  onInputChange:(name, value) => {
    console.log('change in ' + name + ' :', value);
    const action = onInputChange(value);
    action.name = name;
    dispatch(action);
  },

  onSubmitTrip:() => {
    const action = onSubmitTrip();
    dispatch(action);
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
