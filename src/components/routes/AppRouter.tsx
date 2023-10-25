import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

const AppRouter = () => (
  <>
    <PublicRoutes />
    <PrivateRoutes />
  </>
);

export default AppRouter;
