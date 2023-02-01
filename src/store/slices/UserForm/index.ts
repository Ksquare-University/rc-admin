import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  City,
  CustomerAddress,
  RestaurantFetchOptions,
  User,
  UserAdmin,
  UserCourrier,
  UserCustomer,
  UserForm,
  UserManager,
  UserOwner
} from "./reducers";
import axios from 'axios'


export const fetchCities = createAsyncThunk('city/fetchAll', async (thunkAPI) => {
  const res = await fetch(`http://localhost:3001/city/`)
  const data = await res.json();
  return data;
})
export const fetchRestaurants = createAsyncThunk('restaurant/fetchAll', async (thunkAPI) => {
  const res = await fetch(`http://localhost:3001/restaurant/`)
  const data = await res.json();
  // console.log(data);
  
  return data["restaurants"];
})

//Create user
interface createUser{
  displayName: string;
  email: string;
  password: string;
  full_name: string;
  phone_number: string;
}
//Customer
interface createCustomer{
  displayName: string;
  email: string;
  password: string;
  full_name: string;
  phone_number: string;
  address: string;
  reference: string;
  zip_code: number;
  city_id: number;
}
export const createCustomer = createAsyncThunk('user/createCustomer', async (customer: createCustomer, thunkAPI) => {
  const res = await axios.post(`http://localhost:3001/user/customer`, { 
    displayName: customer.displayName,
    email: customer.email,
    password: customer.password,
    full_name: customer.full_name,
    phone_number: customer.phone_number,
    address: customer.address,
    reference: customer.reference,
    zip_code: customer.zip_code,
    city_id: customer.city_id,
  });
  //console.log(res.data);
  return res.data;
})

//Owner/Admin
export const createOwner = createAsyncThunk('user/createOwner', async (owner: createUser, thunkAPI) => {
  const res = await axios.post(`http://localhost:3001/user/owner`, { 
    displayName: owner.displayName,
    email: owner.email,
    password: owner.password,
    full_name: owner.full_name,
    phone_number: owner.phone_number,
  });
  //console.log(res.data);
  return res.data;
});

//Courrier
export const createCourrier = createAsyncThunk('user/createCourrier', async (courrier: createUser, thunkAPI) => {
  const res = await axios.post(`http://localhost:3001/user/owner`, { 
    displayName: courrier.displayName,
    email: courrier.email,
    password: courrier.password,
    full_name: courrier.full_name,
    phone_number: courrier.phone_number,
  });
  //console.log(res.data);
  return res.data;
});

//Manager
interface createManager{
  displayName: string;
  email: string;
  password: string;
  restaurant_id: number;
}
export const createManager = createAsyncThunk('user/createManager', async (manager: createManager, thunkAPI) => {
  const res = await axios.post(`http://localhost:3001/user/owner`, { 
    displayName: manager.displayName,
    email: manager.email,
    password: manager.password,
    restaurant_id: manager.restaurant_id,
  });
  return res.data;
});

//Edit
export const updateRestaurant = createAsyncThunk('restaurant/updateByRestaurantId', async (thunkAPI) => {
  axios.put(`http://localhost:3001/restaurant/wo/`, { 
    // name: restaurant.name,
    // description: restaurant.description,
    // city_id: restaurant.city_id,
    // category: restaurant.category,
    // delivery_fee: restaurant.delivery_fee,
    // phone_number: restaurant.phone_number
  })
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
});

// Slice
const rootSlice = createSlice({
  name: "userForm",
  initialState: <UserForm>
    {
      user: {
        email: "",
        phone: "",
        user_name: "",
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
        address: {
          customer_id: 0,
          address: '',
          reference: '',
          zip_code: 0,
          city_id: 1,
        },
      },
      courrier: {
        fullname: '',
        user_id: '',
        phone: '',
      },
      admin: {
        fullname: '',
        user_id: '',
        phone: '',
      },
      loading: 'idle',
      city: [],
      restaurants: [],
    },
  reducers: {
    updateUserState(state, action: PayloadAction<UserForm>) {
      state = action.payload;
      return state;
    },
    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      return state;
    },
    updateAdmin(state, action: PayloadAction<UserAdmin>) {
      state.admin = action.payload;
      return state;
    },
    updateManager(state, action: PayloadAction<UserManager>) {
      state.manager = action.payload;
      return state;
    },
    updateCustomer(state, action: PayloadAction<UserCustomer>) {
      state.customer.user = action.payload;
      return state;
    },
    updateAddress(state, action: PayloadAction<CustomerAddress>) {
      state.customer.address = action.payload;
      return state;
    },
    updateCourrier(state, action: PayloadAction<UserCourrier>) {
      state.courrier = action.payload;
      return state;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchCities.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(fetchCities.fulfilled, (state, action: PayloadAction<City[]>) => {
        state.city= action.payload;
        state.loading = 'success';
    })
    builder.addCase(fetchRestaurants.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(fetchRestaurants.fulfilled, (state, action: PayloadAction<RestaurantFetchOptions[]>) => {
        state.restaurants = action.payload;
        state.loading = 'success';
    })

    builder.addCase(createCustomer.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(createCustomer.fulfilled, (state) => {
        state.loading = 'success';
    })
    builder.addCase(createOwner.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(createOwner.fulfilled, (state) => {
        state.loading = 'success';
    })
    builder.addCase(createManager.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(createManager.fulfilled, (state) => {
        state.loading = 'success';
    })
    builder.addCase(createCourrier.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(createCourrier.fulfilled, (state) => {
        state.loading = 'success';
    })

  }
});


// Actions
export const { updateUserState, updateCourrier,  updateUser, updateAdmin, updateManager, updateCustomer, updateAddress
} =
  rootSlice.actions;
export const userForm = rootSlice.reducer;
