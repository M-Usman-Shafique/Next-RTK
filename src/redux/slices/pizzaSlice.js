// src/redux/slices/pizzaSlice.js
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfPizzas: 15,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfPizzas--;
    },
    restocked: (state, action) => {
      state.numOfPizzas += action.payload;
    },
  },
});

export const { ordered, restocked } = pizzaSlice.actions;
export default pizzaSlice.reducer;
