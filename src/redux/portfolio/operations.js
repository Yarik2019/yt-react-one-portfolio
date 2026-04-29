import { portfolioApi } from "../service/configApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPortfolio = createAsyncThunk(
  "portfolio/getPortfolio",
  async (_, thunkAPI) => {
    try {
      const { data } = await portfolioApi.get("/portfolio");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
