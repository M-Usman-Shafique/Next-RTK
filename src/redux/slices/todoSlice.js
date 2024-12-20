// src/redux/slices/todoSlice.js
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    clearAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, clearAllTodos } = todoSlice.actions;
export default todoSlice.reducer;
