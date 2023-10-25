import { Switch } from "react-router-dom";
import { PrivateRoute } from "../shared/PrivateRoute";
import { Elinks } from "./links";
import EventsPage from "../views/private/EventsPage";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

export const PrivateRoutes = () => {
  const { credentials } = useContext(AuthContext);

  return (
    <Switch>
      <PrivateRoute
        component={EventsPage}
        path={Elinks.eventsHome}
        isAuth={!!credentials}
      />
    </Switch>
  );
};
