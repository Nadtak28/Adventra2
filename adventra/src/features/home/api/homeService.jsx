import { createAsyncThunk } from "@reduxjs/toolkit";
import MoujaasAuth from "../../../api/moujaasAuth";  // Your axios or API instance
import { API } from "../../../api/apiRoutes";

export const HomeService = createAsyncThunk(
  "home/fetchHomeData",
  async (_, thunkAPI) => {
    try {
      const response = await MoujaasAuth.get(API.home);
      console.log(response.data);
      return response.data;
      // Your backend's entire home data object
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to load home data");
    }
  }
);
