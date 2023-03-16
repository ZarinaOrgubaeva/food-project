import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.Slice";
import { basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { uiSlice } from "./UI/uiSlice";

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
