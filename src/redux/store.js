// src/redux/store.js
const { configureStore } = require("@reduxjs/toolkit");
import todoReducer from "./slices/todoSlice";
import fetchTodoReducer from "./slices/fetchTodoSlice";

export const store = configureStore({
  reducer: {
    globalTodo: todoReducer,
    fetchTodoReducer,
  },
});
