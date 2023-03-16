import axios from "axios";
import { store } from "../store";
import { singOut } from "../store/auth/auth.thunk";
const BASE_URL =
  "http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: store.getState().auth.token,
      },
    };
    return newConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      store.dispatch(singOut());
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
