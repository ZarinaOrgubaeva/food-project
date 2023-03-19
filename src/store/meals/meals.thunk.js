import { createAsyncThunk } from "@reduxjs/toolkit";
import { mealsGet } from "../../api/basketService";
import {
  deleteMealsReq,
  editMealsReq,
  mealsPostRequest,
} from "../../api/mealsService";

export const getMeals = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await mealsGet();
      return data.data;
    } catch (error) {
      return rejectWithValue("Failed to load meals");
    }
  }
);

export const postMeals = createAsyncThunk(
  "meals/postMeals",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await mealsPostRequest(data);
      dispatch(getMeals());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteMeal = createAsyncThunk(
  "meals/deleteMeals",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await deleteMealsReq(id);
      return dispatch(getMeals());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editMeal = createAsyncThunk(
  "meals/editMeals",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await editMealsReq(data);
      dispatch(getMeals());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
