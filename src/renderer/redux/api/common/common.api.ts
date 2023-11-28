import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonUrl } from '@renderer/redux/model/PokemonUrl';
import { Result } from '@renderer/redux/model/Result';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Result<PokemonUrl[]>, undefined>({
      query: () => `pokemon`,
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
