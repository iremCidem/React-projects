import { createSlice } from "@reduxjs/toolkit";
import { addCarList } from "./carsSlice";
const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeCarName(state, action) {
      state.name = action.payload;
    },
    changeCarValue(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCarList, (state) => {
      state.name = " ";
      state.cost = 0;
    });
  },
});

export const { changeCarName, changeCarValue } = formSlice.actions;
export const formReducer = formSlice.reducer;
