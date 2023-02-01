import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  counterState,
  InitialState,
  Information,
  Schedule,
  Disable,
} from "./reducers";


type NewRestaurant = {
  information: Information;
  is_deleted: boolean;
  owner_id: number;

}

type Restaurant = {
  id: number;
  name : string;
  description: string
  city_id: number
  category: string;
  delivery_fee: number;
  phone_number: string;
  is_deleted: boolean;
}

export const createRestaurant = createAsyncThunk('restaurant/createRestaurant', async (restaurant: NewRestaurant, thunkAPI) => {
  const res = await axios.post(`http://localhost:3001/restaurant/new`, { 
    name: restaurant.information.name,
    description: restaurant.information.description,
    city_id: 1,
    category: restaurant.information.category,
    delivery_fee: restaurant.information.delivery_fee,
    phone_number: restaurant.information.phone_number,
    is_deleted: restaurant.is_deleted,
    owner_id: restaurant.owner_id

  })
  console.log(res.data);
  return res.data;
})

type NewSchedule = {
  day: string;
  restaurant_id: number;
  opening_hour: string;
  closing_hour: string;
}

export const createSchedule = createAsyncThunk('restaurant/createSchedule', async (schedule: NewSchedule, thunkAPI) => {

  const res = await axios.post(`http://localhost:3001/schedule/new`, { 
    day: schedule.day,
    restaurant_id: schedule.restaurant_id,
    opening_hour: schedule.opening_hour,
    closing_hour: schedule.closing_hour
  });

  console.log(res.data);

  return res.data;
})

// Slice
const rootSlice = createSlice({
  name: "newRestaurantForm",
  initialState: <InitialState>{
    FormStage: 1, // default page stage to show on page load
    FormInformation: {
      name: "",
      description: "",
      phone_number: 0,
      category: "",
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
    loading: 'idle',
    restaurant_id: 0,
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
  extraReducers: (builder) =>{
    builder.addCase(createRestaurant.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(createRestaurant.fulfilled, (state, action: PayloadAction<Restaurant>) => {
        state.restaurant_id = action.payload.id
        console.log(action.payload.id);
        state.loading = 'success';
    })
    builder.addCase(createSchedule.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(createSchedule.fulfilled, (state) => {
        state.loading = 'success'
    })
  }
});

// Actions
export const { updateState, formInformation, formSchedule, formDisable } =
  rootSlice.actions;
export const newRestaurantCount = rootSlice.reducer;
