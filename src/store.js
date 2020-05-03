import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,

  // if the redux dev tools exist, use them, if not give it some bogus function
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
