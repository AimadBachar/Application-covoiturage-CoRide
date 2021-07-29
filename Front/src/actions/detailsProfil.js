export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_EMAIL = "FETCH_EMAIL";
export const FETCH_EMAIL_SUCCESS = "FETCH_EMAIL_SUCCESS";

export const fetchUsers = ()=>({
  type: FETCH_USERS
});

export const fetchUsersSuccess = (payload)=>({
  type: FETCH_USERS_SUCCESS,
  payload
})

export const fetchEmail = (payload)=>({
  type: FETCH_EMAIL,
  payload
})

export const fetchEmailSuccess = (payload)=>({
  type: FETCH_EMAIL_SUCCESS,
  payload
})
