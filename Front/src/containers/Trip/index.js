import { connect } from 'react-redux';
import Trip from 'src/components/Trip';
import { onSubmitSearch, onInputChange } from 'src/actions/trip';

const mapStateToProps = (state) => ({
  departure_city: state.trip.inputs.departure_city,
  destination_city: state.trip.inputs.destination_city,
  activity_id: state.trip.inputs.activity_id,
  departure_timestamp: state.trip.inputs.departure_timestamp,
  description: state.trip.inputs.description,
  places_available: state.trip.inputs.places_available,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitSearch:() => {
    console.log('trip created')
    const action = onSubmitSearch();
    dispatch(action);
  },

  onInputChange:(name, value) => {
    console.log('change in ' + name + ' :', value);
    const action = onInputChange(value);
    action.name = name;
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
