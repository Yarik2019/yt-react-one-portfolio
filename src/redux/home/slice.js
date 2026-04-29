import { createSlice } from "@reduxjs/toolkit";
import { getHome } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHome.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getHome.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getHome.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const homeReducer = homeSlice.reducer;