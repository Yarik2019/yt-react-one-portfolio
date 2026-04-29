import { createSlice } from "@reduxjs/toolkit";
import { getContact } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const contactReducer = contactSlice.reducer;