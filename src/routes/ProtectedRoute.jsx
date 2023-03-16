import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({
  component: Component, //userLayout
  fallBackPath, // "/admin/meals"
  allowedRoles, // ['USER',"GUEST"]
}) => {
  if (!allowedRoles) {
    return <Navigate to={fallBackPath} />;
  }
  return <Component />;
};
