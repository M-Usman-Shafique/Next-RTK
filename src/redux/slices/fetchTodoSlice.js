// src/redux/slices/fetchTodoSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("getTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

const initialState = {
  isLoading: false,
  todos: [],
  error: "",
};

const fetchTodoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchTodoSlice.reducer;
