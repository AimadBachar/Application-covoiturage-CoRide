export const ON_SUBMIT_CHANGE = 'ON_SUBMIT_CHANGE';
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE'

export const onSubmitSearch = () => ({
  type: ON_SUBMIT_CHANGE,
});

export const onInputChange = (payload) => ({
  type: ON_INPUT_CHANGE,
  payload
});
