import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { array: [], loginSuccess: false },
  reducers: {
    addUser(state, action) {
      console.log(action);
      state.array.push(action.payload);
    },
    deleteUser(state, action) {
      state.array.splice(action.payload, 1);
    },
    clearAllUsers(state) {
      state.array = [];
    },
    isLoginSuccess(state, action) {
      console.log(action);
      state.loginSuccess = action.payload;
    },
  },
});
export const { addUser, deleteUser, clearAllUsers, isLoginSuccess } =
  userSlice.actions;
export default userSlice.reducer;
