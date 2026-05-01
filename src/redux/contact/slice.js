import { createSlice, isAnyOf  } from "@reduxjs/toolkit";
import { getContact, postContact } from "./operations";

const initialState = {
  token: null,
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
        state.token = action.payload;
      }).addCase(postContact.fulfilled, (state) => {
        state.loading = false;
      })
      .addMatcher(isAnyOf(getContact.pending, postContact.pending), (state) => {
        state.loading = true;
        state.error = false;
      })
      .addMatcher(isAnyOf(getContact.rejected, postContact.rejected), (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const contactReducer = contactSlice.reducer;