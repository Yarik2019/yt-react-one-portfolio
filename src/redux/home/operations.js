import { portfolioApi } from "../service/configApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHome = createAsyncThunk(
  "home/getHome",
  async (_, thunkAPI) => {
    try {
      const { data } = await portfolioApi.get("/home");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
