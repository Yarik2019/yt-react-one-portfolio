import { portfolioApi } from "../service/configApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getExperience = createAsyncThunk(
  "experience/getExperience",
  async (_, thunkAPI) => {
    try {
      const { data } = await portfolioApi.get("/experience");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
