import { useMemo } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { createTheme, ThemeProvider } from "@mui/material";
import { darkTheme, LightTheme } from "./lib/constants/theme";
import { SnakeBar } from "./components/UI/SnakeBar";
import { uiActions } from "./store/UI/uiSlice";
import { AppRoutes } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
function AppContent() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.ui.themeMode);
  const snakebar = useSelector((state) => state.ui.snakebar);
  const theme = useMemo(() => {
    const currentTheme =
      themeMode === "Light"
        ? {
            ...LightTheme,
          }
        : { ...darkTheme };
    return createTheme(currentTheme);
  }, [themeMode]);
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <SnakeBar
        isOpen={snakebar.isOpen}
        severity={snakebar.severity}
        message={snakebar.message}
        onClose={() => dispatch(uiActions.closeSnakebar())}
      />
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </BrowserRouter>
  );
};
export default App;
