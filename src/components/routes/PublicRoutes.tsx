import { Switch, Route } from "react-router-dom";
import LoginPage from "../views/public/LoginPage";
import RegisterPage from "../views/public/RegisterPage";
import { Elinks } from "./links";

export const PublicRoutes = () => (
  <Switch>
    <Route exact path={Elinks.login}>
      <LoginPage />
    </Route>
    <Route exact path={Elinks.register}>
      <RegisterPage />
    </Route>
  </Switch>
);
