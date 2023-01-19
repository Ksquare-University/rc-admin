import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type PokemonFetchOptions = {
    name: string;
    sortBy?: string;
    limit?: number;
    offset?: number;
}

export const fetchPokemonByName = createAsyncThunk('pokemon/fetchByName', async (pokeName: PokemonFetchOptions, thunkAPI) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.name}`)
    const data = await res.json();

    return data;
})


export interface CounterState {
    value: number;
    pokemons: any[]
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
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonByName.pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
            state.pokemons.push(action.payload);
            state.loading = 'success';
        })
    },
})

export const { increment, decrement } = counterSlice.actions
export const counter = counterSlice.reducer;
