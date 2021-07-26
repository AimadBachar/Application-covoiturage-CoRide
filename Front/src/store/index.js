import { createStore, applyMiddleware, compose } from 'redux';

// j'importe mon reducer 
import reducer from '/src/reducers';

import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import trajetMiddleware from 'src/middlewares/trajetMiddleware';
import signinMiddleware from 'src/middlewares/signinMiddleware';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    ajaxMiddleware,
    trajetMiddleware,
    signinMiddleware
  ),
);

const store = createStore(reducer, enhancers);

export default store;
