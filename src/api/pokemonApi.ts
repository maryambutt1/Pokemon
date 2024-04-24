import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL of the Pokémon API
const BASE_URL = 'https://pokeapi.co/api/v2';

// Define the API slice using createApi
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Define an endpoint for fetching the list of Pokémon
    getPokemonList: builder.query<PokemonListResponse, void>({ // Explicitly define the response type
      query: () => 'pokemon',
    }),

    // Define an endpoint for fetching details of a Pokémon by name
    getPokemonByName: builder.query<any, string>({ // Use 'any' for now, update it to the correct type later
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Define the type of the response data
interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

// Export generated endpoint functions for use in components or async actions
export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokemonApi;
