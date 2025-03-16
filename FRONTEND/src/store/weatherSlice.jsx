import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_KEY = "cfcff711332ec58990e2b312bce1b037";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {}, // No manual reducers since we use async thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
