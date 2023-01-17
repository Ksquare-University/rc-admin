import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    User
} from "./reducers";

// Slice
const rootSlice = createSlice({
  name: "currentUserState",
  initialState: <User>{
    displayName: '',
    email: '',
    phone: '',
    },
  reducers: {
    updateUserState(state, action: PayloadAction<User>) {
      state = action.payload;
      console.log('estado', state);
    },
    printUserState(state, action: PayloadAction<User>) {
      console.log('estado sin change', state);
    },
  },
});

// Actions
export const { updateUserState, printUserState} =
  rootSlice.actions;
export const currentUserState = rootSlice.reducer;
