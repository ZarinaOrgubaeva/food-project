import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/authService";
import { STORAGE_KYES } from "../../lib/constants/common";

export const singUp = createAsyncThunk(
  "auth/singUp",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authService.singUpRequest(payload);
      const userData = data.data;
      localStorage.setItem(STORAGE_KYES.AUTH, JSON.stringify(userData));
      return userData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const singIn = createAsyncThunk(
  "auth/singIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authService.singInRequest(payload);
      const userData = data.data;
      localStorage.setItem(STORAGE_KYES.AUTH, JSON.stringify(userData));
      return userData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const singOut = createAsyncThunk("auth/singOut", async () => {
  return localStorage.removeItem(STORAGE_KYES.AUTH);
});
