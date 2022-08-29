import createSagaMiddleware from "@redux-saga/core";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import pronostico from "./forecast/actions";
import rootSaga from "../Saga/index";

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  pronostico,
});
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
const enhancers = [];

middlewares.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>;

// export default createStore(rootReducer, composeEnhancers(...enhancers));
export default createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
