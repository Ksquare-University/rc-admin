import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import reducers, { counterState, initialState, information } from './reducers';

// Slice
const rootSlice = createSlice({
  
  name: "newRestaurantForm",
  initialState: <initialState> {
    FormStage: 0, // default page stage to show on page load
    FormInformation: {
      name: "",
      description: "",
      phone_number: "",
      food_type: "",
      address: "", 
      image:  new File(["foo"], "default-restaurant.png", {
        type: "image/png",
      })
    },
    FormSchedule: {
      name:""
    },
    FormDisable: {
      name:""
    }
  },
  reducers:
  {
    updateState (state, action: PayloadAction<number>){
      state.FormStage = action.payload
    },
    formInformation (state: initialState, action: PayloadAction<information>)  {
      state.FormInformation = action.payload
    }
  },
})

// Actions
export const { updateState, formInformation } = rootSlice.actions
export const newRestaurantCount = rootSlice.reducer;
