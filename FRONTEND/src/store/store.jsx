import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer, // Register weather slice
  },
});

export default store;
