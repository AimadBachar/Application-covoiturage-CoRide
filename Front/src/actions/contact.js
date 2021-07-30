export const FETCH_EMAIL = "FETCH_EMAIL";
export const FETCH_EMAIL_SUCCESS = "FETCH_EMAIL_SUCCESS";



export const fetchEmail = (payload)=>({
  type: FETCH_EMAIL,
  payload
})

export const fetchEmailSuccess = (payload)=>({
  type: FETCH_EMAIL_SUCCESS,
  payload
})