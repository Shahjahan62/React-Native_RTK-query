// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.200.23:8000/User" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => "/all",
    }),
    // Getall: builder.mutation({
    //   query: () => {
    //     return;
    //     {
    //       method: "GET";

    //       url: "/all";
    //     }
    //   },
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
