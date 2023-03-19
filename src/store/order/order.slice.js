import { createSlice } from "@reduxjs/toolkit";
import { getAllorderMeals, getOrderMeals, orderSubmit } from "./order.thunk";
const initialState = {
  meals: [],
  isLoading: false,
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(orderSubmit.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getOrderMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllorderMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
      state.isLoading = false;
    });
  },
});

export const orderActions = orderSlice.actions
