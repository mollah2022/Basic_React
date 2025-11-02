import { createSlice } from "@reduxjs/toolkit";

const initialstates = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState: initialstates,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((e) => e.id === action.payload);
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((e) => e.id === action.payload);
      state[counterIndex].value--;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
