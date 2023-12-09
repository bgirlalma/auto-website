import { createSlice } from "@reduxjs/toolkit";
const { fetchCars } = require("../autoOperation");

const initialState = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const carsSlise = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.cars.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = null;
        state.cars.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars.error = action.payload;
      });
  },
});

export const carsReduser = carsSlise.reducer;
