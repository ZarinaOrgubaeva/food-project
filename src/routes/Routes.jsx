import { Route, Routes } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { MealsPages } from "../pages/Meals";
import { SingInPage } from "../pages/SingIn";
import { SingUpPage } from "../pages/SingUp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<MealsPages />} />
        <Route path="singUp" element={<SingUpPage/>} />
        <Route path="singIn" element={<SingInPage/>} />
      </Route>
    </Routes>
  );
};
