import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  deleteBasketItems,
  getBasketMeals,
  postAddToBasket,
  putUpdateBasket,
} from "../../api/basketService";
export const basketActionsTypes = {
  ADD_ITEM_SUCCESS: " ADD_ITEM_SUCCESS",
  GET_BASKET_SUCCESS: "GET_BASKET_SUCCESS",
};

const initialState = {
  items: [],
  error: "",
  isLoading: false,
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false
    });
    builder.addCase(addToBasket.pending, (state)=>{
      state.isLoading = true;
    });
    builder.addCase(addToBasket.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getBasket.rejected, (state) => {
      state.isLoading = false
      state.error = 'error'
  })
  builder.addCase(updateBasketItem.pending, (state) => {
      state.isLoading = true
  })
  builder.addCase(updateBasketItem.fulfilled, (state) => {
      state.isLoading = false
  })
  builder.addCase(updateBasketItem.rejected, (state, action) => {
      state.isLoading = false
      state.error = +action.payload
  })
  builder.addCase(deleteBasketItem.pending, (state) => {
      state.isLoading = true
  })
  builder.addCase(deleteBasketItem.fulfilled, (state) => {
      state.isLoading = false
  })
  builder.addCase(deleteBasketItem.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
  })

  },
});
export const basketAction = basketSlice.actions;
export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBasketMeals();
      return data.data.items;
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

export const updateBasketItem = createAsyncThunk(
  "basket/updeteBasket",
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      await putUpdateBasket(id, amount);
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBasketItem = createAsyncThunk(
  "basket/deleteBasketItem",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await deleteBasketItems(id);
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const submiteOrder = createAsyncThunk(
  "basket/submiteOrder",
  async ({ orderData }, { dispatch, rejectWithValue }) => {
    try {
      await axios.post(`https://jsonplaceholder.typicode.com/posts`, orderData);

      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue("Some thing wen wrong");
    }
  }
);
export const basketActions = basketSlice.actions