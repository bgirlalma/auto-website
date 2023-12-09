import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  make: "",
  country: ""
};

export const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
