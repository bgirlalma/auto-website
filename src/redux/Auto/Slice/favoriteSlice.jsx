import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorites: (state, action) => {
      const carId = action.payload;
      const index = state.indexOf(carId);

      if (index !== -1) {
        // Якщо вже у улюблених, видалити
        state.splice(index, 1);
      } else {
        // Якщо не у улюблених, додати
        state.push(carId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
