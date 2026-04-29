import { createSlice } from "@reduxjs/toolkit";
import { getAbout } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAbout.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getAbout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAbout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const aboutReducer = aboutSlice.reducer;