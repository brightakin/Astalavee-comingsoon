import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { firstName: " ", email: " ", job: " " };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserDetails(state, action) {
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.job = action.payload.job;
    },
  },
});

const Store = configureStore({ reducer: { user: userSlice.reducer } });

export const userAction = userSlice.actions;
export default Store;
