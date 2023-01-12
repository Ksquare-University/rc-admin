import { createSlice } from '@reduxjs/toolkit';
import reducers, { counterState } from './reducers';

// Slice
const rootSlice = createSlice({
  
  name: "newRestaurantForm",
  initialState: <counterState> 0,
  reducers,
})

// Actions
export const { formInformation, formSchedule, formDisable,} = rootSlice.actions
export const newRestaurantCount = rootSlice.reducer;
