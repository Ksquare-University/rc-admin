import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    sideBarState
} from "./reducer";

// Slice
const rootSlice = createSlice({
  name: "currentUserSideBarState",
  initialState: <sideBarState>{
    value: false,
    },
  reducers: {
    updateUserSideBarState(state, action: PayloadAction<sideBarState>) {
      state = action.payload;
      console.log(state)
      return state;
    }
  },
});


// Actions
export const { updateUserSideBarState} =
  rootSlice.actions;
export const currentUserSideBarState = rootSlice.reducer;
