import { createSlice } from "@reduxjs/toolkit";
import { getSocial } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSocial.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getSocial.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getSocial.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const socialReducer = socialSlice.reducer;