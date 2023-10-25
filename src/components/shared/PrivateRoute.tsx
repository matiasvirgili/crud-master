import { Redirect, Route, RouteProps } from "react-router-dom";
import { Elinks } from "../routes/links";

interface Props extends RouteProps {
  component: any;
  isAuth: boolean;
}

export const PrivateRoute = ({
  component: Component,
  isAuth,
  ...rest
}: Props) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to={Elinks.login} />
    }
  />
);
