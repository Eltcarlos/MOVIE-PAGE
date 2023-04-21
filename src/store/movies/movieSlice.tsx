import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "auth",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMovies } = movieSlice.actions;
