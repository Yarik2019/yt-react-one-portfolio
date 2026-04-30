import { portfolioApi } from "../service/configApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSocial = createAsyncThunk(
  "social/getSocial",
  async (_, thunkAPI) => {
    try {
      const { data } = await portfolioApi.get("/social");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
