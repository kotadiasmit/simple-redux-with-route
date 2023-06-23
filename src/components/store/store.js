import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
export default store;
