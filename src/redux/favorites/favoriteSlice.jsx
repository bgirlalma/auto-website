import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    cars: []
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const carId = state.cars.push(action.payload)
      
       if (state.cars.some((car) => car.id === carId)) {
         // Если автомобиль уже в избранном, удаляем его
         state.cars = state.cars.filter((car) => car.id !== carId);
       } else {
         // Если автомобиля нет в избранном, добавляем его
         state.cars.push(carId);
       }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
