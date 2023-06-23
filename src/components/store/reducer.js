import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllUsers() {
      console.log(123);
      return [];
    },
  },
});
console.log(userSlice);
export const { addUser, deleteUser, clearAllUsers } = userSlice.actions;
export default userSlice.reducer;
