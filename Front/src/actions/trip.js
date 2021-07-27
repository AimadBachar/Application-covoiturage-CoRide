export const TRIP_SUCCES = 'TRIP_SUCCES';
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
export const ON_SUBMIT_TRIP = 'ON_SUBMIT_TRIP';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_SUCCESS_ACTIVITIES = 'FETCH_SUCCESS_ACTIVITIES';

export const tripSucces = (payload) => ({
  type: TRIP_SUCCES,
  payload
});

export const onInputChange = (payload) => ({
  type: ON_INPUT_CHANGE,
  payload
});

export const onSubmitTrip = ()=>({
type: ON_SUBMIT_TRIP
})

export const fetchActivities = ()=>({
  type: FETCH_ACTIVITIES,
})

export const fetchSuccessActivities = (payload)=>({
  type: FETCH_SUCCESS_ACTIVITIES,
  payload
})
