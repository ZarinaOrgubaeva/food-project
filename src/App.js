import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { Meals } from "./components/Meals/Meals";
import { Basket } from "./components/Basket/Basket";
import {styled} from "@mui/system";
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { SnakeBar } from "./components/UI/SnakeBar";
import { uiActions } from "./store/UI/uiSlice";
function AppContent() {
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);
  const snakebar = useSelector((state) => state.ui.snakebar);
  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };
  return (
    <Provider store={store}>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
        <SnakeBar
          isOpen={snakebar.isOpen}
          severity={snakebar.severity}
          message={snakebar.message}
          onClose={() => dispatch(uiActions.closeSnakebar())}
        />
      </Content>
    </Provider>
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
const Content = styled('div')(()=>({
  marginTop: '101px'
}))
  

