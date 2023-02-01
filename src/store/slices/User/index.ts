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
    uid:'',
    // accessToken:'', //AccessToken is stored in axios client Header by the localStorage: Delete this
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
