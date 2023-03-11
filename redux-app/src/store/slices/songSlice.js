import { createSlice } from "@reduxjs/toolkit";
const songsSlice = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      //state.filter((item) => item !== action.payload);
    },
    deleteSongs(state) {
      return [];
    },
  },
});
export const { addSong, removeSong, deleteSongs } = songsSlice.actions;
export default songsSlice.reducer;
