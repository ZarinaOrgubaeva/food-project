import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mealsGet } from "../../api/foodService";

export const mealsActionsTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(getMeals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMeals.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
console.log(mealsSlice);

export const mealsAction = mealsSlice.actions;

export const getMeals = createAsyncThunk(
  "meals/getMeals",
  async ({ rejectWithValue }) => {
    try {
      const { data } = await mealsGet();
      return data;
    } catch (error) {
      return rejectWithValue("Failed to load meals");
    }
  }
);
