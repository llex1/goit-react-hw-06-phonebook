// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

//reducers
import reducer from "./reducer";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({
  reducer
})

export default store;