import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  changeSearchTerm,
  addCarList,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeCarName, changeCarValue } from "./slices/formSlice";
const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export {
  store,
  changeCarName,
  changeCarValue,
  changeSearchTerm,
  addCarList,
  removeCar,
};
