import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import reducers from '../reducers';
import * as config from '../../../config';

/**
 * @param {Object} initialState object to specifiy initial state of the app.
 * @param {boolean} reduxLogger flag to add redux-logger as middleware,
 */
export default function configureStore(initialState, reduxLogger) {
  const middleWares = [thunk];

  if (reduxLogger) {
    middleWares.push(ReduxLogger);
  }

  const enhancer = compose(applyMiddleware(...middleWares));

  const Store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers').default;
      /* eslint-enable global-require */
      Store.replaceReducer(nextRootReducer);
    });
  }

  return Store;
}

export const store = configureStore({}, config.reduxLogger);
