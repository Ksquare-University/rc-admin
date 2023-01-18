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
      return state;
    }
  },
});


// Actions
export const { updateUserState} =
  rootSlice.actions;
export const currentUserState = rootSlice.reducer;
