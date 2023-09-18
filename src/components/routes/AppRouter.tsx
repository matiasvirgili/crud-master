import { Route, Routes } from "react-router";
import LoginPage from "../views/public/LoginPage";
import RegisterPage from "../views/public/RegisterPage";
import EventsPage from "../views/private/EventsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/auth/register" element={<RegisterPage />}></Route>
      <Route path="/events" element={<EventsPage></EventsPage>}></Route>
      <Route path="/*" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
};

export default AppRouter;
