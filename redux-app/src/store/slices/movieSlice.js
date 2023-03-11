import { createSlice } from "@reduxjs/toolkit";
const MovieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    deleteMovies(state, action) {
      return [];
    },
  },
});
export const { addMovie, removeMovie, deleteMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
