import { createStore, applyMiddleware, compose } from 'redux';

// j'importe mon reducer 
import reducer from '/src/reducers';

import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import trajetMiddleware from 'src/middlewares/trajetMiddleware';
import tripMiddleware from 'src/middlewares/tripMiddleware';
import signinMiddleware from 'src/middlewares/signinMiddleware';
import userprofilMiddleware from 'src/middlewares/userprofilMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    ajaxMiddleware,
    trajetMiddleware,
    tripMiddleware,
    signinMiddleware,
    userprofilMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
