import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserForm
} from "./reducers";

// Slice
const rootSlice = createSlice({
  name: "currentUserState",
  initialState: <UserForm>
    {
      user: {
        email: "",
        phone: "",
        role: "customer",
      },
      manager: {
        restaurant_id: 0,
        user_id: '',
      },
      customer: {
        user: {
          full_name: '',
          user_id: '',
          phone: '',
        },
        adress: {
          customer_id: 0,
          adress: '',
          reference: '',
          zip_code: 0,
          city_id: 1,
        },
      },
      courrier: {
        user_id: '',
        phone: '',
      },
    },
  reducers: {
    updateUserState(state, action: PayloadAction<UserForm>) {
      state = action.payload;
      return state;
    }
  },
});


// Actions
export const { updateUserState} =
  rootSlice.actions;
export const currentUserState = rootSlice.reducer;
