import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { Meals } from "./components/Meals/Meals";
import { Basket } from "./components/Basket/Basket";
import { styled } from "@mui/system";
import { useCallback, useMemo, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { SnakeBar } from "./components/UI/SnakeBar";
import { uiActions } from "./store/UI/uiSlice";
import { createTheme, ThemeProvider } from "@mui/material";
import { darkTheme, LightTheme } from "./lib/constants/theme";
function AppContent() {
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);
  const snakebar = useSelector((state) => state.ui.snakebar);
  const themeMode = useSelector((state) => state.ui.themeMode);
  const theme = useMemo(() => {
    const currentTheme =
      themeMode === "Light"
        ? {
            ...LightTheme,
          }
        : { ...darkTheme };
    return createTheme(currentTheme);
  }, [themeMode]);

  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals/>
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
        <SnakeBar
          isOpen={snakebar.isOpen}
          severity={snakebar.severity}
          message={snakebar.message}
          onClose={() => dispatch(uiActions.closeSnakebar())}
        />
      </Content>
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;
const Content = styled("div")(() => ({
  marginTop: "101px",
}));
