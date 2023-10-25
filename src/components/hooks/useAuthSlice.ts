import { useDispatch, useSelector } from "react-redux";
import {
  onChecking,
  onClearErrorMessaje,
  onLogin,
  onLogout,
} from "../../store/auth/AuthSlice";
import { RootState } from "../../store/store";
import { CreateUserDto, LoginDto } from "../validations/auth.dto";
import eventsApi from "../api/eventsApi";
import { useHistory } from "react-router";
import { Elinks } from "../routes/links";
import { useAuth } from "../../config/use-auth";

const useAuthSlice = () => {
  const { isLoading, status, errorMessage, user } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const { saveCredentials } = useAuth();

  const startLogin = async (values: LoginDto) => {
    dispatch(onChecking());
    try {
      const { data } = await eventsApi.post("/auth", values);
      localStorage.setItem("token", JSON.stringify(data.token));
      saveCredentials(data);
      dispatch(onLogin(data));
      history.push(Elinks.eventsHome);
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
    }
  };

  const startRegister = async (values: CreateUserDto) => {
    dispatch(onChecking());
    try {
      const { data } = await eventsApi.post("/auth/new", values);
      localStorage.setItem("token", data.token);
      dispatch(onLogin(data));
    } catch (error) {
      dispatch(onLogout(error));
    }
  };

  const startDeleteErrorAuth = () => {
    dispatch(onClearErrorMessaje());
  };

  return {
    // Propiedades
    isLoading,
    status,
    user,
    errorMessage,
    // Métodos
    startLogin,
    startDeleteErrorAuth,
    startRegister,
  };
};

export default useAuthSlice;
