// src/redux/store.js
const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "./slices/counterSlice";
import usersReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    globalCounter: counterReducer,
    usersReducer,
  },
});
