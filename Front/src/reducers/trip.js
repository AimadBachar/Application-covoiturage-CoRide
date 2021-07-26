import {
  ON_SUBMIT_CHANGE,
  ON_INPUT_CHANGE,
} from 'src/actions/trip';


export const initialState = {
  inputs: {
    departure_city: "",
    destination_city: "",
    activity_id: "",
    departure_timestamp: "",
    description: "",
    places_available: "",
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.payload
        },
      };
    case ON_SUBMIT_CHANGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
