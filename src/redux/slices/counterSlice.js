// src/redux/slices/counterSlice.js
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.count += action.payload;
    },
    decreaseCount: (state, action) => {
      state.count -= action.payload;
    },
    resetCount: (state) => {
      state.count = initialState.count;
    },
  },
});

export const { increaseCount, decreaseCount, resetCount } =
  counterSlice.actions;
export default counterSlice.reducer;
