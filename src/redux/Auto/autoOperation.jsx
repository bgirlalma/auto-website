import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65719d5dd61ba6fcc01317a9.mockapi.io";
  
export const fetchCars = createAsyncThunk("cars/fetchCars", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/cars/catalog");
    console.log("Data received:", res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});


export const addCars = createAsyncThunk("cars/addCars", async (id, thunkAPI) => {
  try {
    const res = await axios.post(`/cars/${id}`);
    console.log("Data received:", res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const deleteCar = createAsyncThunk("cars/deleteCar", async (id, thunkAPI) => {
    try {
        const res = await axios.delete(`/cars/${id}`)
        console.log("Delete:", res.data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
})
