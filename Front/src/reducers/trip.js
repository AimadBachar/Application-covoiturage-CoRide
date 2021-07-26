export const initialState = {
  inputs: {
    departure_city:"city",
    destination_city:"city",
    activity_id:"activity",
    departure_timestamp:"date",
    description:"blabla",
    places_available:"2",
  },
},

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
