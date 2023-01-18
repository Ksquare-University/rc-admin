import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  counterState,
  InitialState,
  Information,
  Schedule,
  Disable,
} from "./reducers";

// Slice
const rootSlice = createSlice({
  name: "newRestaurantForm",
  initialState: <InitialState>{
    FormStage: 1, // default page stage to show on page load
    FormInformation: {
      name: "",
      description: "",
      phone_number: "",
      food_type: "",
      address: "",
      delivery_fee: 0,
    },
    FormSchedule: {
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
    FormDisable: {
      enable: true,
      open: false
    },
  },
  reducers: {
    updateState(state, action: PayloadAction<number>) {
      state.FormStage = action.payload;
    },
    formInformation(state: InitialState, action: PayloadAction<Information>) {
      state.FormInformation = action.payload;
    },
    formSchedule(state: InitialState, action: PayloadAction<Schedule>) {
      state.FormSchedule = action.payload;
    },
    formDisable(state: InitialState, action: PayloadAction<Disable>) {
      state.FormDisable = action.payload;
    },
  },
});

// Actions
export const { updateState, formInformation, formSchedule, formDisable } =
  rootSlice.actions;
export const newRestaurantCount = rootSlice.reducer;
