import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonApi, useGetPokemonListQuery } from '../../api/pokemonApi';


interface PokemonState {
  pokemonList: any[]; // Define the type of your Pokemon list
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PokemonState = {
  pokemonList: [],
  status: 'idle',
  error: null,
};

// Define an async athunk to fetch the list of Pokemon
export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchPokemonList',
  async () => {
    try {
      const response = await useGetPokemonListQuery(); // Call the hook directly
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    // Define slice reducers here
    pokemonListLoading(state) {
      state.status = 'loading';
    },
    pokemonListReceived(state, action: PayloadAction<any[]>) {
      state.status = 'succeeded';
      console.log("tt0", action.payload)
      state.pokemonList = action.payload;
    },
    pokemonListFailed(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { pokemonListLoading, pokemonListReceived, pokemonListFailed } = pokemonSlice.actions;

export default pokemonSlice.reducer;
