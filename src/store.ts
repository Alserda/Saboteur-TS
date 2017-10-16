import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { history } from 'services/router';

function configureStore(initialState?: IRootState) {
  const rootReducer = combineReducers<IRootState>({
    router: routerReducer,
  });

  const enhancer = applyMiddleware(
    thunk,
    logger,
    routerMiddleware(history),
  );

  return createStore(
    rootReducer,
    initialState!,
    enhancer,
  );
}

export const store = configureStore();

export interface IRootState {
  router: Reducer<RouterState>;
}