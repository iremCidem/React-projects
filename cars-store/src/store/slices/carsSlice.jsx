import { createSlice, nanoid } from "@reduxjs/toolkit";
const carsSlice = createSlice({
  name: "cars",
  initialState: {
    carlist: [],
    searchTerm: " ",
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCarList(state, action) {
      state.carlist.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.carlist.filter((car) => {
        return car.id !== action.payload;
      });
      state.carlist = updated;
    },
  },
});
export const { changeSearchTerm, addCarList, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
