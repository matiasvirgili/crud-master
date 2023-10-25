import { Provider } from "react-redux";
import AppRouter from "./components/routes/AppRouter";
import "./styles/reset.css";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./providers/AuthWrapper";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AuthWrapper>
        <AppRouter />
      </AuthWrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
