import { createSlice } from "@reduxjs/toolkit";

const initialStates = [
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
  initialState: initialStates,
  reducers: {
    increament: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value--;
    },
  },
});
export default countersSlice.reducer;
export const { increament, decrement } = countersSlice.actions;
