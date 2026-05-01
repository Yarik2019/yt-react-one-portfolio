import { portfolioApi } from "../service/configApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContact = createAsyncThunk(
  "contact/getContact",
  async (_, thunkAPI) => {
    try {
      const { data } = await portfolioApi.get("/contact/confirm");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const postContact = createAsyncThunk(
  "contact/postContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await portfolioApi.post("/contact", body);
      console.log(data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
