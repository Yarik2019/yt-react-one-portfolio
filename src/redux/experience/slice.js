import { createSlice } from "@reduxjs/toolkit";
import { getExperience } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getExperience.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getExperience.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const experienceReducer = experienceSlice.reducer;