//après la création du container Login 
//j'ajoute un reducer-user.js avec de fausses datas
//puis je modifie le state du container login avec ces fausses datas
  export const initialState = {
    logged: false,
    loggedMessage: 'Welcome Laurent !',
    inputs: {
        email: 'coride@app.com',
        password: 'FrontForLife',
    }
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default reducer;