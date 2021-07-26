import { connect } from 'react-redux';
import Trip from 'src/components/Trip';

const mapStateToProps = (state) => ({
  departure_city:"city",
  destination_city:"city",
  activity_id:"activity",
  departure_timestamp:"date",
  description:"blabla",
  places_available:"2",
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
