import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authSlice from "./auth/auth.Slice";
import { basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { uiSlice } from "./UI/uiSlice";

const rootReducer = combineReducers({
  [mealsSlice.name]: mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
