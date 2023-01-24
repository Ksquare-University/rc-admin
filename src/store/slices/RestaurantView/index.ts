import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import {
  InitialState,
  Information,
  Schedule,
  Disable,
  RestaurantOption,
  ScheduleOption,
} from "./reducers";

import axios from 'axios'



type RestaurantFetchOptions = {
  id: number;
  sortBy?: string;
  limit?: number;
  offset?: number;
}

//FETCH for the view
export const fetchRestaurantById = createAsyncThunk('restaurant/fetchById', async (restaurant: RestaurantFetchOptions, thunkAPI) => {
  const res = await fetch(`http://localhost:3001/restaurant/${restaurant.id}`)
  const data = await res.json();
  return data;
})

export const fetchScheduleByRestaurantId = createAsyncThunk('restaurant/schedule/fetchByRestaurantId', async (restaurant: RestaurantFetchOptions, thunkAPI) => {
  const res = await fetch(`http://localhost:3001/schedule/restaurant/${restaurant.id}`)
  const data = await res.json();
  console.log(data);
  return data;
})

type RestaurantUpdate = {
  id: number;
  name: string;
  description:string;
  city_id: number;
  category: string;
  delivery_fee: number;
  phone_number: number;
}

export const updateRestaurant = createAsyncThunk('restaurant/updateByRestaurantId', async (restaurant: RestaurantUpdate, thunkAPI) => {
  axios.put(`http://localhost:3001/restaurant/wo/${restaurant.id}`, { 
    name: restaurant.name,
    description: restaurant.description,
    city_id: restaurant.city_id,
    category: restaurant.category,
    delivery_fee: restaurant.delivery_fee,
    phone_number: restaurant.phone_number
  })
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
})

type ScheduleUpdate = {
  id: number;
  opening: string;
  closing: string;
}

export const updateSchedule = createAsyncThunk('schedule/updateScheduleById', async (schedule: ScheduleUpdate, thunkAPI) => {
  axios.put(`http://localhost:3001/schedule/${schedule.id}`, { 
    opening_hour: schedule.opening,
    closing_hour: schedule.closing
  })
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
})


// Slice
const rootSlice = createSlice({
  name: "restaurantView",
  initialState: <InitialState>{
    ViewStage: 0, // default page stage to show on page load
    ViewInformation: {
      name: "VIEW",
      description: "VIEW",
      phone_number: 91295651,
      category: "",
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
    loading: 'idle',
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
  extraReducers:(builder)=>{
    builder.addCase(fetchRestaurantById.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(fetchRestaurantById.fulfilled, (state, action: PayloadAction<RestaurantOption>) => {

        state.ViewInformation.name = action.payload.name;
        state.ViewInformation.description = action.payload.description;
        state.ViewInformation.address = "MID";
        state.ViewInformation.delivery_fee = action.payload.delivery_fee;
        state.ViewInformation.category = action.payload.category;

        state.ViewDisable.enable = action.payload.is_deleted;
        state.ViewDisable.open = action.payload.is_deleted;
        
        state.loading = 'success';
    })
    builder.addCase(fetchScheduleByRestaurantId.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(fetchScheduleByRestaurantId.fulfilled, (state, action: PayloadAction<ScheduleOption[]>) => {
        
        //Monday
        state.ViewSchedule.week.monday.day = action.payload[0].id;
        state.ViewSchedule.week.monday.oppeningTime = action.payload[0].opening_hour;
        state.ViewSchedule.week.monday.closeTime = action.payload[0].closing_hour;
        //Tuesday
        state.ViewSchedule.week.Tuesday.day = action.payload[1].id;
        state.ViewSchedule.week.Tuesday.oppeningTime = action.payload[1].opening_hour;
        state.ViewSchedule.week.Tuesday.closeTime = action.payload[1].closing_hour;
        //Wednesday
        state.ViewSchedule.week.Wednesday.day = action.payload[2].id;
        state.ViewSchedule.week.Wednesday.oppeningTime = action.payload[2].opening_hour;
        state.ViewSchedule.week.Wednesday.closeTime = action.payload[2].closing_hour;
        //Thursday
        state.ViewSchedule.week.Thrusday.day = action.payload[3].id;
        state.ViewSchedule.week.Thrusday.oppeningTime = action.payload[3].opening_hour;
        state.ViewSchedule.week.Thrusday.closeTime = action.payload[3].closing_hour;
        //Friday
        state.ViewSchedule.week.Friday.day = action.payload[4].id;
        state.ViewSchedule.week.Friday.oppeningTime = action.payload[4].opening_hour;
        state.ViewSchedule.week.Friday.closeTime = action.payload[4].closing_hour;
        //Saturday
        state.ViewSchedule.week.Saturday.day = action.payload[5].id;
        state.ViewSchedule.week.Saturday.oppeningTime = action.payload[5].opening_hour;
        state.ViewSchedule.week.Saturday.closeTime = action.payload[5].closing_hour;
        //Sunday
        state.ViewSchedule.week.Sunday.day = action.payload[6].id;
        state.ViewSchedule.week.Sunday.oppeningTime = action.payload[6].opening_hour;
        state.ViewSchedule.week.Sunday.closeTime = action.payload[6].closing_hour;

        state.loading = 'success';
    })
    builder.addCase(updateRestaurant.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(updateRestaurant.fulfilled, (state) => {
        state.loading = 'success';
    })
    builder.addCase(updateSchedule.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(updateSchedule.fulfilled, (state) => {
        state.loading = 'success';
    })
  }
});

// Actions
export const { updateState, viewInformation, viewSchedule, viewDisable } =
  rootSlice.actions;
export const restaurantView = rootSlice.reducer;
