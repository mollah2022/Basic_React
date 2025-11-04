import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featuers/counters/counterSlice";
import postsReducer from "../featuers/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
  },
});
export default store;
