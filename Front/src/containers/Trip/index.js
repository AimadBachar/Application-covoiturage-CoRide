import { connect } from 'react-redux';
import Trip from 'src/components/Trip';

const mapStateToProps = (state) => ({
  departure_city: state.usersignin.inputs.departure_city,
  destination_city: state.usersignin.inputs.destination_city,
  activity_id: state.usersignin.inputs.activity_id,
  departure_timestamp: state.usersignin.inputs.departure_timestamp,
  description: state.usersignin.inputs.description,
  places_available: state.usersignin.inputs.places_available,
});

const mapDispatchToProps = (dispatch) => ({

  onSubmitSearch:() => {
    console.log('trip created')
  },

  onInputChange:(value, name) => {
    console.log('change in ' + name + ' :', value);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
