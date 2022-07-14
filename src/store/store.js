import { createStore, compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./rootReducer";

const middlewares = [logger];
const enhancer = compose(applyMiddleware(...middlewares));

export const store = createStore(
  rootReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
