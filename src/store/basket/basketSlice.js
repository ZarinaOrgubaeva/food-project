import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../../lib/fetchApi";

export const basketActionsTypes = {
  ADD_ITEM_SUCCESS: " ADD_ITEM_SUCCESS",
  GET_BASKET_SUCCESS: "GET_BASKET_SUCCESS",
};

const initialState = {
  items: [],
  error: "",
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export const basketAction = basketSlice.actions;
export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await fetchApi("basket");
      return data.items;
    } catch (error) {
      return rejectWithValue("Failed to load meals");
    }
  }
);
export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue("Failed to load meals");
    }
  }
);

export const updateBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      alert("error", error);
    }
  };
export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await fetchApi(`basketItem/${id}/delete`, {
      method: "DELETE",
    });
    dispatch(getBasket());
  } catch (error) {
    alert("error", error);
  }
};
