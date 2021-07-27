import {
  ON_SUBMIT_CHANGE,
  ON_INPUT_CHANGE,
  FETCH_SUCCESS_ACTIVITIES,
  TRIP_SUCCESS
} from 'src/actions/trip';



export const initialState = {
  tags: [],
  inputs: {
    departure_city: "",
    destination_city: "",
    activity_id: "",
    departure_timestamp: "",
    description: "",
    places_available: "",
    longitude_departure: "",
    latitude_departure: "",
  }};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case TRIP_SUCCESS:
        console.log("success",action.payload);
      return{
        ...state
      }

    case ON_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.payload
        },
      };
    case ON_SUBMIT_CHANGE:
      console.log("Trip reducer on submit_change", action.type);
      return {
        ...state,
      };
    case FETCH_SUCCESS_ACTIVITIES:
      console.log("reducers",action.payload);
      return{
        ...state,
        tags: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
