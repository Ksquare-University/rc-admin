import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialState,
  Information,
  Schedule,
  Disable,
} from "./reducers";

// Slice
const rootSlice = createSlice({
  name: "restaurantView",
  initialState: <InitialState>{
    ViewStage: 1, // default page stage to show on page load
    ViewInformation: {
      name: "VIEW",
      description: "VIEW",
      phone_number: "VIEW",
      food_type: "",
      address: "",
      delivery_fee: 0,
    },
    ViewSchedule: {
      stepDay: 1,
      week: {
        monday: { day: 1, oppeningTime: "07:00", closeTime: "22:00" },
        Tuesday: { day: 2, oppeningTime: "07:00", closeTime: "22:00" },
        Wednesday: { day: 3, oppeningTime: "07:00", closeTime: "22:00" },
        Thrusday: { day: 4, oppeningTime: "07:00", closeTime: "22:00" },
        Friday: { day: 5, oppeningTime: "07:00", closeTime: "22:00" },
        Saturday: { day: 6, oppeningTime: "07:00", closeTime: "22:00" },
        Sunday: { day: 7, oppeningTime: "07:00", closeTime: "22:00" },
      },
    },
    ViewDisable: {
      enable: true,
      open: false
    },
  },
  reducers: {
    updateState(state, action: PayloadAction<number>) {
      state.ViewStage = action.payload;
    },
    viewInformation(state: InitialState, action: PayloadAction<Information>) {
      state.ViewInformation = action.payload;
    },
    viewSchedule(state: InitialState, action: PayloadAction<Schedule>) {
      state.ViewSchedule = action.payload;
    },
    viewDisable(state: InitialState, action: PayloadAction<Disable>) {
      state.ViewDisable = action.payload;
    },
  },
});

// Actions
export const { updateState, viewInformation, viewSchedule, viewDisable } =
  rootSlice.actions;
export const restaurantView = rootSlice.reducer;
