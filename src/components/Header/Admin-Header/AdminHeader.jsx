import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singOut } from "../../../store/auth/auth.thunk";

const menus = [
  {
    path: "meals",
    title: "Meals",
  },
  {
    path: "orders",
    title: "Orders",
  },
];

export const AdminHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singOutHandler = () => {
    navigate("/singIn");
    dispatch(singOut());
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "white",
                marginRight: "10px",
              }}
            >
              {item.title}
            </NavLink>
          ))}
        </Typography>
        <Button color="inherit" onClick={singOutHandler}>
          Sing out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
