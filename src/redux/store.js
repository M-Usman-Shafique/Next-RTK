// src/redux/store.js
const { configureStore } = require("@reduxjs/toolkit");
import cakeReducer from "./slices/cakeSlice";
import pizzaReducer from "./slices/pizzaSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    cakeReducer,
    pizzaReducer,
    globalCounter: counterReducer,
  },
});
