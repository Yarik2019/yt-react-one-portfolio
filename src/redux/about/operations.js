import { portfolioApi } from "../service/configApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAbout = createAsyncThunk(
  "about/getAbout",
  async (_, thunkAPI) => {
    try {
      const { data } = await portfolioApi.get("/about");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
