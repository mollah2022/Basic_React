import { createSlice } from "@reduxjs/toolkit";

const initailstates = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counters",
  initialState: initailstates,
  reducers: {
    increment: (state, action) => {
      const findIndex = state.findIndex((e) => e.id === action.payload);
      state[findIndex].value++;
    },
    decrement: (state, action) => {
      const findIndex = state.findIndex((e) => e.id === action.payload);
      state[findIndex].value--;
    },
  },
});
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
