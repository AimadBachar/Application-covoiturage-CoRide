import {
  ON_SUBMIT_CHANGE,
  ON_INPUT_CHANGE,
} from 'src/actions/trip';

import dataTags from '/src/data/data_tag.js';

export const initialState = {
  tags: dataTags,
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
      console.log("Trip reducer on submit_change", action.type);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
