import { createSlice } from "@reduxjs/toolkit";
import { getPortfolio } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getPortfolio.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPortfolio.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const portfolioReducer = portfolioSlice.reducer;
