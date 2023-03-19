import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addOrderRequests,
  getAllMealsOrderRequests,
  getOrderRequests,
} from "../../api/oderService";

export const getOrderMeals = createAsyncThunk(
  "basket/getOrderMeals",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getOrderRequests();
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const orderSubmit = createAsyncThunk(
  "basket/orderSubmit",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await addOrderRequests(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getAllorderMeals = createAsyncThunk(
  "basket/getAllOrdersMeals",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllMealsOrderRequests();
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
