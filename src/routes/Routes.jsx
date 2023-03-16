import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { UserLayout } from "../layout/UserLayout";
import { UserRoles } from "../lib/constants/common";
import { Meals } from "../pages/admin/Meals";
import { Orders } from "../pages/admin/Order";
import { NotFound } from "../pages/NotFound";
import { MealsPages } from "../pages/user/Meals";
import { SingInPage } from "../pages/user/SingIn";
import { SingUpPage } from "../pages/user/SingUp";
import { ProtectedRoute } from "./ProtectedRoute";

// const routes = {
//   [UserRoles.ADMIN]: (
//     <Route path="/admin" element={<AdminLayout />}>
//       <Route path="meals" element={<Meals />} />
//       <Route path="orders" element={<Orders />} />
//     </Route>
//   ),
//   [UserRoles.USER]: (
//     <Route path="/" element={<UserLayout />}>
//       <Route index element={<MealsPages />} />
//     </Route>
//   ),
//   [UserRoles.GUEST]: (
//     <Route path="/" element={<UserLayout />}>
//       <Route index element={<MealsPages />} />
//       <Route path="singUp" element={<SingUpPage />} />
//       <Route path="singIn" element={<SingInPage />} />
//     </Route>
//   ),
// };

export const AppRoutes = () => {
  const role = useSelector((state) => state.auth.user.role);
  const allowedRoles = (roles) => {
    return roles.includes(role);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            allowedRoles={allowedRoles([UserRoles.GUEST, UserRoles.USER])}
            fallBackPath={"/admin/meals"}
            component={UserLayout}
          />
        }
      >
        <Route
          index
          element={
            <ProtectedRoute
              allowedRoles={allowedRoles([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath={role === UserRoles.ADMIN ? "/admin/meals" : "/"}
              component={MealsPages}
            />
          }
        />
        <Route
          path="singUp"
          element={
            <ProtectedRoute
              allowedRoles={allowedRoles([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath={role === UserRoles.ADMIN ? "/admin/meals" : "/"}
              component={SingUpPage}
            />
          }
        />
        <Route
          path="singIn"
          element={
            <ProtectedRoute
              allowedRoles={allowedRoles([UserRoles.GUEST])}
              fallBackPath={role === UserRoles.ADMIN ? "/admin/meals" : "/"}
              component={SingInPage}
            />
          }
        />
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute
            allowedRoles={allowedRoles([UserRoles.ADMIN])}
            fallBackPath={"/"}
            component={AdminLayout}
          />
        }
      >
        <Route
          path="meals"
          element={
            <ProtectedRoute
              allowedRoles={allowedRoles([UserRoles.ADMIN])}
              fallBackPath={"/"}
              component={Meals}
            />
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoute
              allowedRoles={allowedRoles([UserRoles.ADMIN])}
              fallBackPath={"/"}
              component={Orders}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
