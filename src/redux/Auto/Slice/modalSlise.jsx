import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    selectCar: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectCar = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.selectCar = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
