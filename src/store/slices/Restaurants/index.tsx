import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type RestaurantFetchOptions = {
    id: number;
    sortBy?: string;
    limit?: number;
    offset?: number;
}

export const fetchRestaurantsbyOwnerid = createAsyncThunk('pokemon/fetchByName', async (restaurant: RestaurantFetchOptions, thunkAPI) => {
    const res = await fetch(`http://localhost:3001/restaurant/all/${restaurant.id}`)
    const data = await res.json();
    return data["restaurants"];
})

interface RestaurantOption {
    id: number;
    name: string;
    description: string;
    city_id: number;
    category: string;
    delivery_fee: number;
    phone_number: number;
    owner_id: number;
    is_deleted: boolean;
    createdAt: string;
    updatedAt: string;
  }
export interface CounterState {
    value: number;
    pokemons: RestaurantOption[]
    loading: 'idle' | 'pending' | 'success' | 'failure'
}

const initialCounterState: CounterState = {
    value: 0,
    pokemons: [],
    loading: 'idle'
}
// Auth Slice
// loginThunk -> loginThunk/pending loginThunk/success loginThunk/failed

// Users Slice
// Escuchar si loginThunk/success -> yo voy a guardar del payload -> user.email y user.id


const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurantsbyOwnerid.pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(fetchRestaurantsbyOwnerid.fulfilled, (state, action) => {
            state.pokemons = action.payload;
            state.loading = 'success';
        })
        
    },
})

export const { } = counterSlice.actions
export const counter = counterSlice.reducer;
