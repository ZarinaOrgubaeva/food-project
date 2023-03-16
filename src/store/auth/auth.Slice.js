import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KYES, UserRoles } from "../../lib/constants/common";
import { singIn, singOut, singUp } from "./auth.thunk";

const getInitialState = () => {
  const json = localStorage.getItem(STORAGE_KYES.AUTH);
  if (json) {
    const userData = JSON.parse(json);
    return {
      isAuthorized: true,
      token: userData.token,
      user: {
        name: userData.user.name,
        email: userData.user.email,
        role: userData.user.role,
      },
    };
  }
  return {
    isAuthorized: false,
    token: "",
    user: {
      role: UserRoles.GUEST,
      email: "",
      name: "",
    },
  };
};
const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState,
  extraReducers: (builder) => {
    builder.addCase(singUp.fulfilled, (state, { payload }) => {
      state.isAuthorized = true;
      state.token = payload.token;
      state.user = {
        name: payload.user.name,
        email: payload.user.email,
        role: payload.user.role,
      };
      builder.addCase(singIn.fulfilled, (state, { payload }) => {
        state.isAuthorized = true;
        state.token = payload.token;
        state.user = {
          name: payload.user.name,
          email: payload.user.email,
          role: payload.user.role,
        };
      });
      builder.addCase(singOut.fulfilled, (state) => {
        state.isAuthorized = false;
        state.token = "";
        state.user = {
          name: "",
          email: "",
          role: "",
        };
      });
    });
  },
});
export default authSlice;
