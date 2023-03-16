import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AdminHeader } from "../components/Header/Admin-Header/AdminHeader";

export const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Grid>
        <Outlet />
      </Grid>
    </>
  );
};
