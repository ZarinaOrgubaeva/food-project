import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteBasketItems, getBasketMeals, postAddToBasket, putUpdateBasket } from "../../api/foodService";
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
  async ( { rejectWithValue }) => {
    try {
      const { data } = await getBasketMeals();
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
      await postAddToBasket(newItem);
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
      await putUpdateBasket(id,amount);
      dispatch(getBasket());
    } catch (error) {
      alert("error", error);
    }
  };
export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await deleteBasketItems(id);
    dispatch(getBasket());
  } catch (error) {
    alert("error", error);
  }
};

export const submiteOrder = createAsyncThunk(
  "basket/submiteOrder",
  async ({ orderData }, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: orderData,
      });

      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue("Some thing wen wrong");
    }
  }
);
