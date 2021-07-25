  // 1. après la création du container Login
  // j'ajoute un reducer-user.js avec de fausses datas
  // puis je modifie le state du container signin avec ces fausses datas
  export const initialState = {
    signed: false,
    signedMessage: 'Welcome !',
    inputs: {
      lastname: "Sion",
      firstname: "Anna",
      user: 'anna@coride.fr',
      password: '1234',
      birthdate: "23/05/1990"
    }, 
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default reducer;
  