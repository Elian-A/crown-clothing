import { createStore, compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./rootReducer";

const modestLogger = (store) => (next) => (action) => {
  const { type, payload } = action;
  if (!type) {
    return next(action);
  }
  console.log("store state:", store.getState());
  console.log("type:", type);
  console.log("payload:", payload);

  next(action);

  console.log("current state:", store.getState());
};

const middlewares = [modestLogger];
const enhancer = compose(applyMiddleware(...middlewares));

export const store = createStore(
  rootReducer,
  undefined,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
